import { MoreVert } from '@material-ui/icons';
import React, { useState } from 'react';
import './post.css';
import { Users } from '../../dummyData';


interface PostProps {
  id: number;
  photo: string;
  date: string;
  userId: number;
  like: number;
  comment: number;
  desc?: string;
}

interface Posts {
  post: PostProps
}


const Post: React.FC<Posts> = ({ post }) => {
  const [like, setLike] = useState<number>(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const user = Users.find((u) => u.id === post.userId);

  const PF = process.env.REACT_APP_PUBLIC_URL;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src={user?.profilePicture} alt='' />
            <span className='postUserName'>{user?.username}</span>
            <span className='postDate'>{post?.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImg' src={PF + post?.photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=''
            />
            <img
              className='likeIcon'
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=''
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
