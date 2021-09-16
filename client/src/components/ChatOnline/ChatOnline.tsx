import React from 'react'
import './chatOnline.css'

function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src={"https://i.pravatar.cc/300"} alt="" />
          <div className="chatOnlineBadge">

          </div>
        </div>
        <span className="chatOnlineFriend">
          John Doe
        </span>
      </div>
    </div>
  )
}

export default ChatOnline
