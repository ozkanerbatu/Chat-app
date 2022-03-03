import io from "socket.io-client";
import React, { useState } from "react";
import "./App.css";
import Chat from "./Chat";

//connet backend and frontend
const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room!==""){
      socket.emit("join_room",room)

    }
  };

  return (
    <div className="App">
      <h3>Join chat</h3>
      <input
        type="text"
        placeholder="Mehmet..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      ></input>
      <button onClick={joinRoom}>Join Room</button>
      
    <Chat socket={socket} username={username} room={room}/>
    </div>
  );
}

export default App;
