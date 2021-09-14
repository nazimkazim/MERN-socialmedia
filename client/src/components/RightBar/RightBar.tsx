import React, { useEffect, useState } from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';
import { UserObj } from '../../interfaces'
import axios from 'axios';
import { Friend } from '../../interfaces'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@material-ui/icons';

const RightBar: React.FC<UserObj | null> = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  const [friends, setFriends] = useState<Friend[]>(null);
  const {user:currentUser} = useContext(AuthContext)
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser.followings, user?._id])

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`/users/friends/${user._id}`);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFriends()
  }, [user?._id])

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/follow`, {userId:currentUser._id})
      } else {
        await axios.put(`/users/${user._id}/unfollow`, {userId:currentUser._id})
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  }

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
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove/> : <Add/>}
        </button>
      )}
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
        {friends && friends.map((friend => (
          <div className='rightbarFollowings'>
            <Link to={`/profile/${friend?.username}`} style={{textDecoration:'none'}}>
              <div className='rightbarFollowing'>
                <img
                  src={friend?.profilePicture ?
                    PF + friend?.profilePicture :
                    `${PF}person/no_avatar.png`}
                  alt=''
                  className='rightbarFollowingImg'
                />
                <span className='rightbarFollowingName'>{friend?.username}</span>
              </div>
            </Link>
          </div>
        )))}

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
