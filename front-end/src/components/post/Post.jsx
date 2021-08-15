import { MoreVert } from '@material-ui/icons';
import React from 'react';
import './post.css';
import { Users } from '../../dummyData';

export default function Post({ post }) {
  const user = Users.find((u) => u.id === post.userId);
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src={user?.profilePicture} alt='' />
            <span className='postUserName'>{user?.username}</span>
            <span className='postDate'>{post?.data}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImg' src={post?.photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='assets/like.png' alt='' />
            <img className='likeIcon' src='assets/heart.png' alt='' />
            <span className='postLikeCounter'>{post?.like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
