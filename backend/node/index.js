const express = require('express')
var cors = require('cors')
const { Server } = require("socket.io");

const app = express()
app.use(cors())

const io = new Server(6002,{ 
    cors:'*',
});

io.on("connection", (socket) => {
    //console.log(socket.id);

    socket.addListener('sendMessage', (e)=>{
        //console.log(e);

        socket.broadcast.emit('receiveMessage',{message:e})

        //io.emit('receiveMessage',{message:e})
    })
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)