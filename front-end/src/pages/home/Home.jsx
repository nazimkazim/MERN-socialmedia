import React from 'react';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';
import SideBar from '../../components/SideBar/SideBar';
import Topbar from '../../components/TopBar/Topbar';
import './home.css';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
