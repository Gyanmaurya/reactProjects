// src/Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to backend server

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(()=>{

     socket.on('chat message', (msg)=>{
          setMessages((pre)=> [...pre, msg])
     })

     return ()=>{
          socket.off('chat message')
     }

  },[])

  const handleSubmit = (e)=>{
     e.preventDefault();
     socket.emit('chat message', message)
     setMessage('')
  }

  return (
<>
 {
    messages.map((mess, index)=> (
     <div key={index}>{mess}</div> 

     ) )
 }



 <div>
     <form onSubmit={handleSubmit}>
          <input placeholder="Type a message..." type="text" value={message} onChange={(e)=> setMessage(e.target.value)  } />
          <button type='submit'>send</button>
     </form>
 </div>

</>
  );
};

export default Chat;
