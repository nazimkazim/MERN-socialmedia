import { MoreVert } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './post.css';
import { Posts, User } from '../../interfaces'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom';


const Post: React.FC<Posts> = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [user, setUser] = useState<User | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`)
      console.log(res)
      if (res.data) {
        setUser(res.data);
      }

    }
    fetchUser()
  }, [post.userId])



  //console.log(user)
  //console.log(post)


  const PF: string | undefined = process.env.REACT_APP_PUBLIC_URL;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`/profile/${user?.username}`}>
              <img className='postProfileImg' src={user?.profilePicture || (PF + 'person/no_avatar.png')} alt='' />
            </Link>
            <span className='postUserName'>{user && user.username}</span>
            <span className='postDate'>{format(post?.createdAt)}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.description}</span>
          <img className='postImg' src={PF + post?.image} alt='' />
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
            <span className='postCommentText'>{user && user.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
