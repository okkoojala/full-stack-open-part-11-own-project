const express = require('express')
const app = express()
const fs = require('fs')
const uuid = require('uuid')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.static('build'))

const json = fs.readFileSync('db.json')
const anecdotes = JSON.parse(json)

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.get('/anecdotes', (req, res) => {
  res.json(anecdotes.anecdotes)
})

app.put('/anecdotes/:id', (req, res) => {
  const b = req.body
  b.votes = parseInt(b.votes) + 1
  res.json(b)
})

app.post('/anecdotes', (req, res) => {
  const b = req.body
  b.id = uuid.v4()
  anecdotes.anecdotes.push(b)
  res.json(b)
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
