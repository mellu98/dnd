import type { CombatMessage } from './types'
import { SignalingClient } from './signaling-client'

/**
 * Thin wrapper around RTCPeerConnection + RTCDataChannel.
 *
 * Star topology:
 *   - Host (DM) creates one RTCPeerConnection per player
 *   - Player creates one RTCPeerConnection to the host
 */

export type WebRtcRole = 'host' | 'player'

interface PeerConnection {
  peerId: string
  pc: RTCPeerConnection
  channel: RTCDataChannel | null
}

export class WebRtcManager {
  private myPeerId: string
  private code: string
  private signaling: SignalingClient
  private peers: Map<string, PeerConnection> = new Map()
  private onMessageCb: ((from: string, data: CombatMessage) => void) | null = null
  private onPeerConnectedCb: ((peerId: string) => void) | null = null
  private onPeerDisconnectedCb: ((peerId: string) => void) | null = null
  private icePollAbort: AbortController | null = null

  constructor(code: string, myPeerId: string, signaling: SignalingClient) {
    this.code = code
    this.myPeerId = myPeerId
    this.signaling = signaling
  }

  getPeerId() {
    return this.myPeerId
  }

  /** Host: create offer and publish it to signaling */
  async startHost(): Promise<void> {
    // Host waits for players to connect — nothing to send yet
    // The offer is created when a player joins
  }

  /**
   * Host: create a peer connection for a joining player.
   * Called when the DM dashboard detects a new player wants to join.
   */
  async createPeerForPlayer(peerId: string): Promise<void> {
    const pc = this.createPeerConnection(peerId)
    const channel = pc.createDataChannel('combat', { ordered: true })
    this.setupChannel(channel, peerId)

    const offer = await pc.createOffer()
    await pc.setLocalDescription(offer)
    await this.signaling.sendOffer(this.code, offer)

    // Wait for answer via polling
    void this.pollForAnswer(peerId)
  }

  /**
   * Player: connect to the host.
   * Creates an RTCPeerConnection, waits for host's offer, creates answer.
   */
  async joinAsPlayer(): Promise<void> {
    // Step 1: Get host's offer
    const offerData = await this.signaling.getOffer(this.code)
    if (!offerData?.offer) throw new Error('No host offer found')

    // Step 2: Create peer connection and set remote description
    const pc = new RTCPeerConnection(this.rtcConfig())
    this.setupPeerConnection(pc, 'host')

    // Listen for data channel from host
    pc.ondatachannel = (event) => {
      const channel = event.channel
      this.setupChannel(channel, 'host')
    }

    await pc.setRemoteDescription(new RTCSessionDescription(offerData.offer))

    // Step 3: Create answer and send it
    const answer = await pc.createAnswer()
    await pc.setLocalDescription(answer)
    await this.signaling.sendAnswer(this.code, answer, this.myPeerId)

    // Step 4: ICE trickle
    this.startIceTrickle('host')
  }

  /** Send a message to a specific peer (host sends to player) */
  sendTo(peerId: string, data: CombatMessage): void {
    const peer = this.peers.get(peerId)
    if (!peer?.channel || peer.channel.readyState !== 'open') return
    peer.channel.send(JSON.stringify(data))
  }

  /** Broadcast a message to all connected peers (host only) */
  broadcast(data: CombatMessage): void {
    for (const [peerId] of this.peers) {
      this.sendTo(peerId, data)
    }
  }

  /** Send a message to the host (player only) */
  sendToHost(data: CombatMessage): void {
    this.sendTo('host', data)
  }

  onMessage(cb: (from: string, data: CombatMessage) => void): void {
    this.onMessageCb = cb
  }

  onPeerConnected(cb: (peerId: string) => void): void {
    this.onPeerConnectedCb = cb
  }

  onPeerDisconnected(cb: (peerId: string) => void): void {
    this.onPeerDisconnectedCb = cb
  }

  close(): void {
    this.icePollAbort?.abort()
    for (const [, peer] of this.peers) {
      peer.channel?.close()
      peer.pc.close()
    }
    this.peers.clear()
  }

  // ─── Internals ─────────────────────────────────────────────

  private rtcConfig(): RTCConfiguration {
    return {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
      ],
    }
  }

  private createPeerConnection(peerId: string): RTCPeerConnection {
    const pc = new RTCPeerConnection(this.rtcConfig())
    this.setupPeerConnection(pc, peerId)
    return pc
  }

  private setupPeerConnection(pc: RTCPeerConnection, peerId: string): void {
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        this.signaling.sendIce(this.code, event.candidate, peerId).catch(() => {})
      }
    }

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === 'disconnected' || pc.connectionState === 'failed') {
        this.peers.delete(peerId)
        this.onPeerDisconnectedCb?.(peerId)
      }
    }
  }

  private setupChannel(channel: RTCDataChannel, peerId: string): void {
    channel.onopen = () => {
      this.onPeerConnectedCb?.(peerId)
    }

    channel.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as CombatMessage
        this.onMessageCb?.(peerId, data)
      } catch {
        // ignore malformed messages
      }
    }

    channel.onclose = () => {
      this.onPeerDisconnectedCb?.(peerId)
    }

    // Store channel reference (for host, keyed by peerId)
    const key = peerId === 'host' ? 'host' : peerId
    this.peers.set(key, {
      peerId,
      pc: this.peers.get(key)?.pc ?? (channel as any).owner ?? this.peers.get(key)?.pc!,
      channel,
    })
  }

  private async pollForAnswer(peerId: string): Promise<void> {
    // Poll signaling for the player's answer
    for (let i = 0; i < 60; i++) {
      // Give player up to 60 seconds to respond
      const answerData = await this.signaling.getAnswer(this.code, peerId)
      if (answerData?.answer) {
        const peer = this.peers.get(peerId)
        if (peer) {
          await peer.pc.setRemoteDescription(new RTCSessionDescription(answerData.answer))
          // Send host's ICE candidates to player
          this.sendHostIce(peerId)
        }
        return
      }
      await sleep(500)
    }
  }

  private async sendHostIce(toPeerId: string): Promise<void> {
    // Send any queued ICE candidates
    const peer = this.peers.get(toPeerId)
    if (!peer) return

    for (let i = 0; i < 20; i++) {
      const candidates = await this.signaling.pollIce(this.code, toPeerId, new AbortController().signal)
      for (const candidate of candidates) {
        await peer.pc.addIceCandidate(new RTCIceCandidate(candidate))
      }
      if (candidates.length === 0) break
      await sleep(200)
    }
  }

  private startIceTrickle(_target: string): void {
    this.icePollAbort = new AbortController()
    void this.pollIceLoop(this.icePollAbort.signal)
  }

  private async pollIceLoop(signal: AbortSignal): Promise<void> {
    while (!signal.aborted) {
      try {
        const candidates = await this.signaling.pollIce(this.code, this.myPeerId, signal)
        const peer = this.peers.get('host')
        if (peer?.pc) {
          for (const candidate of candidates) {
            await peer.pc.addIceCandidate(new RTCIceCandidate(candidate))
          }
        }
      } catch {
        // polling interrupted, retry
      }
      await sleep(1000)
    }
  }
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}
