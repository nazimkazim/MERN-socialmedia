import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';

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
          {Users.map((u) => (
            <Online user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
