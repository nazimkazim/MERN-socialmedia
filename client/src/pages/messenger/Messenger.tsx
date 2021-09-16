import React from 'react'
import ChatOnline from '../../components/ChatOnline/ChatOnline';
import Conversation from '../../components/Conversations/Conversation';
import Message from '../../components/Message/Message';
import Topbar from '../../components/TopBar/Topbar';
import './messenger.css'


const Messenger: React.FC = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="search for friends" className="chatMenuInput"/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message own={true}/>
              <Message/>
              <Message own={true}/>
              <Message own={true}/>
              <Message own={true}/>
              <Message own={true}/>
              <Message own={true}/>
              <Message own={true}/>
              <Message own={true}/>
              <Message own={true}/>
              <Message own={true}/>
            </div>
            <div className="chatBoxBottom">
              <textarea className="chatMessageInput" placeholder="write something...">

              </textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Messenger;
