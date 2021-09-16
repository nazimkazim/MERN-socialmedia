import React from 'react'
import './message.css'

function Message({own}:{own?:boolean}) {
  console.log(own)
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img src={"https://i.pravatar.cc/300"} alt="" className="messageImg" />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  )
}

export default Message
