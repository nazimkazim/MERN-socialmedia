import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../Share/Share';
import './feed.css';
import { PostProps } from '../../interfaces'
import { FeedProps } from '../../interfaces';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



const Feed: React.FC<FeedProps> = ({ username }) => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ?
        await axios.get(`/posts/profile/${username}`) :
        await axios.get(`posts/timeline/${user._id}`)
      if (res.data) {
        setPosts(res.data.sort((p1:PostProps, p2:PostProps) => {
          return +new Date(p2.createdAt) - +new Date(p1.createdAt);
        }));
      }

    }
    fetchPosts()
  }, [user?._id, username])

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts && posts.map((p: PostProps) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
