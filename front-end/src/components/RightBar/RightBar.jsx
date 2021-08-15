import React from 'react';
import './rightbar.css';

export default function RightBar() {
  return (
    <div className='rightbar'>
      <div className='rightBarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='assets/gift.png' alt='' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and 3 others friends have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online friends</h4>
        <ul className='friendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                className='rightbarProfileImg'
                src='assets/person/3.jpeg'
                alt=''
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                className='rightbarProfileImg'
                src='assets/person/3.jpeg'
                alt=''
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                className='rightbarProfileImg'
                src='assets/person/3.jpeg'
                alt=''
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
