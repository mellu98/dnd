const SIGNALING_URL = import.meta.env.VITE_SIGNALING_URL ?? 'https://dnd-signal.deno.dev'

/**
 * Thin HTTP client for the Cloudflare Worker signaling endpoint.
 *
 * Protocol:
 *   POST /create     → returns { code }
 *   POST /offer      → host publishes offer
 *   POST /answer     → player sends answer back
 *   POST /ice        → trickle ICE candidates
 *   GET  /peers?code=X  → get existing peerIds in a room
 *   DELETE /delete?code=X → destroy room
 */
export class SignalingClient {
  private baseUrl: string

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ?? SIGNALING_URL
  }

  async createRoom(hostPeerId: string): Promise<{ code: string }> {
    const res = await fetch(`${this.baseUrl}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hostPeerId }),
    })
    if (!res.ok) throw new Error(`Failed to create room: ${res.status}`)
    return res.json()
  }

  async getPeers(code: string): Promise<string[]> {
    const res = await fetch(`${this.baseUrl}/peers?code=${encodeURIComponent(code)}`)
    if (!res.ok) return []
    const data = await res.json()
    return data.peers ?? []
  }

  async sendOffer(code: string, offer: RTCSessionDescriptionInit): Promise<void> {
    await fetch(`${this.baseUrl}/offer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, offer }),
    })
  }

  async getOffer(code: string): Promise<{ offer: RTCSessionDescriptionInit } | null> {
    const res = await fetch(`${this.baseUrl}/offer?code=${encodeURIComponent(code)}`)
    if (!res.ok) return null
    const data = await res.json()
    return data.offer ?? null
  }

  async sendAnswer(code: string, answer: RTCSessionDescriptionInit, peerId: string): Promise<void> {
    await fetch(`${this.baseUrl}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, answer, peerId }),
    })
  }

  async getAnswer(code: string, peerId: string): Promise<{ answer: RTCSessionDescriptionInit } | null> {
    const res = await fetch(`${this.baseUrl}/answer?code=${encodeURIComponent(code)}&peerId=${encodeURIComponent(peerId)}`)
    if (!res.ok) return null
    const data = await res.json()
    return data.answer ?? null
  }

  async sendIce(code: string, candidate: RTCIceCandidateInit, to: string): Promise<void> {
    await fetch(`${this.baseUrl}/ice`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, candidate, to }),
    })
  }

  async pollIce(code: string, myPeerId: string, signal: AbortSignal): Promise<RTCIceCandidateInit[]> {
    const res = await fetch(
      `${this.baseUrl}/ice?code=${encodeURIComponent(code)}&peerId=${encodeURIComponent(myPeerId)}`,
      { signal },
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.candidates ?? []
  }

  async deleteRoom(code: string): Promise<void> {
    await fetch(`${this.baseUrl}/delete?code=${encodeURIComponent(code)}`, { method: 'DELETE' })
  }
}
