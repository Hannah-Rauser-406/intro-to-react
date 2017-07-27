import React from 'react';
import data from './data';

const ChatApp = () => {
  const chatting = data.chats.map(function(chatting,index){
    return(
      <div key={index} >
        <h3>{chatting.username}</h3>
        <p>{chatting.chat}</p>
      </div>
    )
  })
  return(
    <div className= "ChatApp-Header">
      <h1> Chat App 1.0</h1>
      <div className= "chat-container ">
        <h3 className= "chat-card col-md-4">{chatting}</h3>
      </div>
    </div>
  )
}



export default ChatApp;
