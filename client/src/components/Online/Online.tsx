import React from 'react';
import './online.css';

interface User {
  id: number;
  profilePicture: string;
  username: string;
}

interface Users {
  user: User
}

const Online: React.FC<Users> = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  return (
    <li key={user.id} className='rightbarFriend'>
      <div className='rightbarProfileImgContainer'>
        <img className='rightbarProfileImg' src={PF + user.profilePicture} alt='' />
        <span className='rightbarOnline'></span>
      </div>
      <span className='rightbarUsername'>{user.username}</span>
    </li>
  );
}

export default Online;
