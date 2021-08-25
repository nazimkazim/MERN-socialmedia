import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';
import { UserObj } from '../../interfaces'


const RightBar: React.FC<UserObj | null> = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_URL;

  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='assets/gift.png' alt='' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and 3 others friends have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online friends</h4>
        <ul className='friendList'>
          {Users.map((u) => (
            <Online user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user && user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{user && user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>{user && user.relationship === 1 ? "Single" : user && user.relationship === 2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}person/1.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Jon Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}person/2.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Jon Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}person/3.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Jon Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}person/4.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Jon Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}person/5.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Jon Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}person/6.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Jon Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className='rightbar'>
      <div className='rightBarWrapper'>
        {user ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default RightBar;
