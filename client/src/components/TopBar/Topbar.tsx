import React, { useContext } from 'react';
import './topbar.css';
import { Link } from "react-router-dom"
import { Person, Search, Chat, Notifications } from '@material-ui/icons';
import { AuthContext } from '../../context/AuthContext';




const Topbar: React.FC = () => {
  const { user } = useContext(AuthContext);

  const PF: string = process.env.REACT_APP_PUBLIC_URL;
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className='logo'>Lamasocial</span>
        </Link>

      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input
            placeholder='Search for friends, posts or video'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>3</span>
          </div>
        </div>
        <Link to={`/profile/${user?.username}`}>
          <img src={user?.profilePicture ? PF + user['profilePicture'] : PF + "person/no_avatar.png"} alt='' className='topbarImg' />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
