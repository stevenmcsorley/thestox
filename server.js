/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const app = express()
const port = 4000

const server = app.listen(`${port}`, function () {
  console.log(`Server started on port ${port}`)
})
// eslint-disable-next-line @typescript-eslint/no-use-before-define
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

function getRandomValue () {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5
}
io.on('connection', socket => {
  setInterval(() => {
    socket.broadcast.emit('newdata', getRandomValue())
  }, 5000)
})
