import React from 'react'
import './conversation.css';


const Conversation:React.FC = () => {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  return (
    <div className="conversation">
      <img src={PF + "person/no_avatar.png"} alt="" className="conversationImg" />
      <span className="conversationName">John</span>
    </div>
  )
}

export default Conversation;
