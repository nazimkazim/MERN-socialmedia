import React from 'react'
import Conversation from '../../components/Conversations/Conversation';
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
          <div className="chatMenuWrapper">
            <div className="chatBoxTop"></div>
            <div className="chatBoxBottom"></div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            online
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Messenger;
