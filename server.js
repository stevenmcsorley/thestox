// const options = {
//   key: fs.readFileSync(
//     '/usr/local/psa/var/modules/letsencrypt/etc/live/thestox.co.uk/privkey.pem'
//   ),
//   cert: fs.readFileSync(
//     '/usr/local/psa/var/modules/letsencrypt/etc/live/thestox.co.uk/cert.pem'
//   ),
//   ca: fs.readFileSync(
//     '/usr/local/psa/var/modules/letsencrypt/etc/live/thestox.co.uk/chain.pem'
//   ),
//   requestCert: false,
//   rejectUnauthorized: false
// }

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const io = require('socket.io')(server, options, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST']
//   }

// })

// function getRandomValue () {
//   return Math.floor(Math.random() * (50 - 5 + 1)) + 5
// }
// io.on('connection', socket => {
//   setInterval(() => {
//     socket.broadcast.emit('newdata', getRandomValue())
//   }, 5000)
// })
// /* eslint-disable @typescript-eslint/no-var-requires */

// // var app = require('express')();
// // var server = require('http').Server(app);
// // var io = require('socket.io')(server);

// // app.get('/', function(req, res) {
// //     res.sendFile(__dirname + '/index.html');
// // });

// // server.listen(8080);

// // const fs = require('fs')

// // const httpServer = require('http').createServer()
// // const httpsServer = require('https').createServer(options)
// // // const ioServer = require('socket.io')

// // const io = require('socket.io')({
// //   cors: {
// //     origin: 'https://thestox.co.uk',
// //     methods: ['GET', 'POST']
// //   }
// // })

// // io.attach(httpServer)
// // io.attach(httpsServer)
// // httpServer.listen(3004)
// // httpsServer.listen(3000)

// // function getRandomValue () {
// //   return Math.floor(Math.random() * (50 - 5 + 1)) + 5
// // }
// // io.sockets.on('connection', socket => {
// //   setInterval(() => {
// //     socket.broadcast.emit('newdata', getRandomValue())
// //   }, 5000)
// // })

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const app = require("express")();
// const http = require("http").Server(app);
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const io = require("socket.io")(http);
// const port = process.env.PORT || 4000;

// eslint-disable-next-line @typescript-eslint/no-empty-function
// app.get('/', (req, res) => {

// })

// io.on('connection', socket => {
//   socket.on('chat message', msg => {
//     io.emit('chat message', msg)
//   })
// })

// function getRandomValue () {
//   return Math.floor(Math.random() * (50 - 5 + 1)) + 5
// }
// io.on('connection', socket => {
//   setInterval(() => {
//     socket.broadcast.emit('newdata', getRandomValue())
//   }, 5000)
// })

// http.listen(port, () => {
//   console.log(`Socket.IO server running at http://localhost:${port}/`)
// })

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const express = require('express')
// const app = express()
// const port = 5000

// const server = app.listen(`${port}`, function () {
//   console.log(`Server started on port ${port}`)
// })
// // eslint-disable-next-line @typescript-eslint/no-use-before-define
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const io = require('socket.io')(server, {
//   cors: {
//     origin: 'http://localhost:8081',
//     methods: ['GET', 'POST']
//   }
// })

// function getRandomValue () {
//   return Math.floor(Math.random() * (50 - 5 + 1)) + 5
// }
// io.on('connection', socket => {
//   setInterval(() => {
//     socket.broadcast.emit('newdata', getRandomValue())
//   }, 1000)
// })

// eslint-disable-next-line @typescript-eslint/no-var-requires

// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const app = require('express')()
const http = require('http').Server(app)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:8081',
    methods: ['GET', 'POST']
  }
})
const port = process.env.PORT || 5000

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/test2.html');
// });

// io.on('connection', (socket) => {
//   socket.on('chat message', msg => {
//     io.emit('chat message', msg);
//   });
// });

function getStock () {
  // axios
  //   .get(
  //     'https://finnhub.io/api/v1/quote?symbol=AMC&token=c17r93f48v6sj55b4q50'
  //   )
  //   .then(response => {
  //     console.log(response.data)
  //     data = response.data
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  const response = axios.get(
    'https://finnhub.io/api/v1/quote?symbol=AMC&token=c17r93f48v6sj55b4q50'
  )
  console.log('response', response.data)
  return response.data
  // eslint-disable-next-line no-undef
}

async function httpRequest () {
  let d = []
  try {
    const URL = 'https://finnhub.io/api/v1/quote?symbol=AMC&token=c17r93f48v6sj55b4q50'
    const response = await axios.get(URL)
    d = response
    // console.log(response.data)
  } catch (error) {
    console.error(error)
  }
  // console.error(d.data)
  return d.data
}

// function getRandomValue () {
//   return Math.floor(Math.random() * (50 - 5 + 1)) + 5
// }
io.on('connection', socket => {
  setInterval(async () => {
    socket.broadcast.emit('newdata', await httpRequest())
  }, 10000)
})

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})
