import React, { useEffect, useState } from "react";

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
        //time does not appear as a number. looks like a function
      };
      await socket.emit("send_message",messageData)
    }
  };

  useEffect(() => {
  socket.on("recive_message",(data)=>{
    console.log(data);
  })
  }, [socket])
  

  return (
    <div className="chat-window">
      <div className="chat-header">
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
        <button onClick={()=>{sendMessage()}}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
