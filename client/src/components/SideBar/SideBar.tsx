import {
  Bookmark,
  ChatSharp,
  Event,
  Group,
  QuestionAnswerSharp,
  RssFeed,
  School,
  VideocamSharp,
  WorkOutline,
} from '@material-ui/icons';
import React from 'react';
import './sidebar.css';
import { Users } from '../../dummyData';
import CloseFriend from '../CloseFriend/CloseFriend';

const SideBar: React.FC = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <ChatSharp className='sidebarIcon' />
            <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className='sidebarListItem'>
            <VideocamSharp className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Group className='sidebarIcon' />
            <span className='sidebarListItemText'>Group</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <QuestionAnswerSharp className='sidebarIcon' />
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Job</span>
          </li>
          <li className='sidebarListItem'>
            <Event className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <School className='sidebarIcon' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show more</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          {Users.map((u) => {
            return <CloseFriend key={u.id} user={u} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
