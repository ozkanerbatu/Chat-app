const express = require("express")
const app = express()
const http = require("http");
const {Server} = require("socket.io")
const cors = require("cors")

app.use(cors());
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        //connet backend and frontend
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})



io.on("connection",(socket)=>{
    console.log("user connected:"+socket.id)
    socket.on("join_room",(data)=>{
        socket.join(data)
        console.log('user ID:',socket.id,"joined room",data);
    })
    socket.on("disconnect",()=>{
        console.log("user disconnect",socket.id);
    })
    socket.on("send_message",(data)=>{
        console.log(data);

    })
})


server.listen(3001,()=>{
    console.log("server runing");
})
