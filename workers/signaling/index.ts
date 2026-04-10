/**
 * Signaling server for DnD Combat Hub WebRTC sessions.
 *
 * Deploy: deno deploy (free tier)
 * This is the ONLY server-side component. After WebRTC handshake,
 * all data flows peer-to-peer.
 *
 * Endpoints:
 *   POST /create           { hostPeerId } → { code }
 *   POST /offer            { code, offer } → { ok }
 *   GET  /offer?code=X     → { offer }
 *   POST /answer           { code, answer, peerId } → { ok }
 *   GET  /answer?code=X&peerId=Y → { answer }
 *   POST /ice              { code, candidate, to } → { ok }
 *   GET  /ice?code=X&peerId=Y → { candidates: [...] }
 *   GET  /peers?code=X     → { peers: [...] }
 *   DELETE /delete?code=X  → { ok }
 */

interface Room {
  hostPeerId: string
  offer: RTCSessionDescriptionInit | null
  answers: Map<string, RTCSessionDescriptionInit> // peerId → answer
  iceCandidates: Map<string, RTCIceCandidateInit[]> // peerId → candidates
  hostIce: RTCIceCandidateInit[]
  peers: string[]
  createdAt: number
}

const rooms = new Map<string, Room>()
const EXPIRY_MS = 2 * 60 * 60 * 1000 // 2 hours

function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

function cleanup() {
  const now = Date.now()
  for (const [code, room] of rooms) {
    if (now - room.createdAt > EXPIRY_MS) rooms.delete(code)
  }
}
setInterval(cleanup, 60_000)

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url)
  const path = url.pathname

  if (req.method === 'OPTIONS') {
    return json(null, 204)
  }

  if (path === '/create' && req.method === 'POST') {
    const { hostPeerId } = await req.json()
    const code = generateCode()
    rooms.set(code, {
      hostPeerId,
      offer: null,
      answers: new Map(),
      iceCandidates: new Map(),
      hostIce: [],
      peers: [],
      createdAt: Date.now(),
    })
    return json({ code })
  }

  if (path === '/offer') {
    if (req.method === 'POST') {
      const { code, offer } = await req.json()
      const room = rooms.get(code)
      if (!room) return json({ error: 'not_found' }, 404)
      room.offer = offer
      return json({ ok: true })
    }
    if (req.method === 'GET') {
      const code = url.searchParams.get('code')
      const room = rooms.get(code!)
      if (!room || !room.offer) return json(null)
      return json({ offer: room.offer })
    }
  }

  if (path === '/answer') {
    if (req.method === 'POST') {
      const { code, answer, peerId } = await req.json()
      const room = rooms.get(code)
      if (!room) return json({ error: 'not_found' }, 404)
      room.answers.set(peerId, answer)
      if (!room.peers.includes(peerId)) room.peers.push(peerId)
      return json({ ok: true })
    }
    if (req.method === 'GET') {
      const code = url.searchParams.get('code')
      const peerId = url.searchParams.get('peerId')
      const room = rooms.get(code!)
      if (!room) return json(null)
      const answer = room.answers.get(peerId!)
      if (!answer) return json(null)
      return json({ answer })
    }
  }

  if (path === '/ice') {
    if (req.method === 'POST') {
      const { code, candidate, to } = await req.json()
      const room = rooms.get(code)
      if (!room) return json({ error: 'not_found' }, 404)
      if (to === room.hostPeerId) {
        room.hostIce.push(candidate)
      } else {
        const existing = room.iceCandidates.get(to) ?? []
        existing.push(candidate)
        room.iceCandidates.set(to, existing)
      }
      return json({ ok: true })
    }
    if (req.method === 'GET') {
      const code = url.searchParams.get('code')
      const peerId = url.searchParams.get('peerId')
      const room = rooms.get(code!)
      if (!room) return json({ candidates: [] })
      if (peerId === room.hostPeerId) {
        const candidates = [...room.hostIce]
        room.hostIce = []
        return json({ candidates })
      }
      const candidates = room.iceCandidates.get(peerId!) ?? []
      room.iceCandidates.delete(peerId!)
      return json({ candidates })
    }
  }

  if (path === '/peers' && req.method === 'GET') {
    const code = url.searchParams.get('code')
    const room = rooms.get(code!)
    if (!room) return json({ peers: [] })
    return json({ peers: room.peers })
  }

  if (path === '/delete' && req.method === 'DELETE') {
    const code = url.searchParams.get('code')
    rooms.delete(code!)
    return json({ ok: true })
  }

  return json({ error: 'not_found' }, 404)
}

export default { fetch: handler }
