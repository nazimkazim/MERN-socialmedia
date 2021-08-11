import React from 'react';
import './share.css';

export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            className='shareProfilePicture'
            src='/assets/person/1.jpeg'
            alt=''
          />
          <input
            placeholder="What's in your mind"
            type='text'
            className='shareInput'
          />
        </div>
        <div className='shareBottom'></div>
      </div>
    </div>
  );
}
