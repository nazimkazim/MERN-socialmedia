import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../Share/Share';
import './feed.css';
import { PostProps } from '../../interfaces'
import { FeedProps } from '../../interfaces';



const Feed: React.FC<FeedProps> = ({ username }) => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await axios.get(`/posts/profile/${username}`) : await axios.get("/posts/timeline/6107b2f6a34b1d17e016352f")
      if (res.data) {
        setPosts(res.data);
      }

    }
    fetchPosts()
  }, [username])

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
