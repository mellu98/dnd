/**
 * Signaling server for DnD Combat Hub WebRTC sessions.
 * Deploy: Render free tier (Node.js)
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

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const rooms = new Map()
const EXPIRY_MS = 2 * 60 * 60 * 1000 // 2 hours

function generateCode() {
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

app.post('/create', (req, res) => {
  const { hostPeerId } = req.body
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
  res.json({ code })
})

app.post('/offer', (req, res) => {
  const { code, offer } = req.body
  const room = rooms.get(code)
  if (!room) return res.status(404).json({ error: 'not_found' })
  room.offer = offer
  res.json({ ok: true })
})

app.get('/offer', (req, res) => {
  const room = rooms.get(req.query.code)
  if (!room || !room.offer) return res.json(null)
  res.json({ offer: room.offer })
})

app.post('/answer', (req, res) => {
  const { code, answer, peerId } = req.body
  const room = rooms.get(code)
  if (!room) return res.status(404).json({ error: 'not_found' })
  room.answers.set(peerId, answer)
  if (!room.peers.includes(peerId)) room.peers.push(peerId)
  res.json({ ok: true })
})

app.get('/answer', (req, res) => {
  const room = rooms.get(req.query.code)
  if (!room) return res.json(null)
  const answer = room.answers.get(req.query.peerId)
  if (!answer) return res.json(null)
  res.json({ answer })
})

app.post('/ice', (req, res) => {
  const { code, candidate, to } = req.body
  const room = rooms.get(code)
  if (!room) return res.status(404).json({ error: 'not_found' })
  if (to === room.hostPeerId) {
    room.hostIce.push(candidate)
  } else {
    const existing = room.iceCandidates.get(to) ?? []
    existing.push(candidate)
    room.iceCandidates.set(to, existing)
  }
  res.json({ ok: true })
})

app.get('/ice', (req, res) => {
  const room = rooms.get(req.query.code)
  if (!room) return res.json({ candidates: [] })
  if (req.query.peerId === room.hostPeerId) {
    const candidates = [...room.hostIce]
    room.hostIce = []
    return res.json({ candidates })
  }
  const candidates = room.iceCandidates.get(req.query.peerId) ?? []
  room.iceCandidates.delete(req.query.peerId)
  res.json({ candidates })
})

app.get('/peers', (req, res) => {
  const room = rooms.get(req.query.code)
  if (!room) return res.json({ peers: [] })
  res.json({ peers: room.peers })
})

app.delete('/delete', (req, res) => {
  rooms.delete(req.query.code)
  res.json({ ok: true })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`DnD signaling server running on port ${PORT}`)
})
