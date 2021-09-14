import React, { useEffect, useState } from 'react';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';
import SideBar from '../../components/SideBar/SideBar';
import Topbar from '../../components/TopBar/Topbar';
import { User } from '../../interfaces';
import './Profile.css';
import axios from 'axios';
import { useParams } from 'react-router'
import { RouteParams } from '../../interfaces'

export default function Profile() {

  const [user, setUser] = useState<User | null>(null);
  const { username } = useParams<RouteParams>();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username && username}`)
      if (res.data) {
        setUser(res.data);
      }

    }
    fetchUser()
  }, [username])

  const PF = process.env.REACT_APP_PUBLIC_URL;

  return (
    <>
      <Topbar />
      <div className='profile'>
        <SideBar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src={user?.coverPicture ? PF + user.coverPicture : `${PF}person/noCover.png`}
                alt=''
              />
              <img
                className='profileUserImg'
                src={user?.coverPicture ? PF+user.profilePicture : `${PF}person/no_avatar.png`}
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user && user.username}</h4>
              <span className='profileInfoDesc'>{user && user.description}</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed username={username} />
            {user && <RightBar user={user} />}
          </div>
        </div>
      </div>
    </>
  );
}
