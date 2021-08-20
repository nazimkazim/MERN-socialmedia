import React from 'react';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';
import SideBar from '../../components/SideBar/SideBar';
import Topbar from '../../components/TopBar/Topbar';
import './home.css';

const Home: React.FC = () => {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <SideBar />
        <Feed />
        <RightBar profile={false} />
      </div>
    </>
  );
}

export default Home;
