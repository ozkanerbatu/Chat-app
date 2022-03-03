import React, { useState } from "react";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  let hours =new Date(Date.now()).getHours.toString()
  let min =new Date(Date.now()).getMinutes.toString()
    const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        roomId: room,
        author: username,
        message: currentMessage,
        time:
             hours + ":" + min ,
        
      };
      await socket.emit("send_message",messageData)
    }
  };



  return (
    <div>
      <div className="chat-headler">
        <p>Live chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input
          type={"text"}
          placeholder={"heyy.."}
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        ></input>
        <button onClick={()=>{
            sendMessage()
        }}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
