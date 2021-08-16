import React from 'react';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';
import SideBar from '../../components/SideBar/SideBar';
import Topbar from '../../components/TopBar/Topbar';
import './Profile.css';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <SideBar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <img className='profileCoverImg' src='assets/post/3.jpeg' alt='' />
            <img className='profileUserImg' src='assets/person/7.jpeg' alt='' />
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
}
