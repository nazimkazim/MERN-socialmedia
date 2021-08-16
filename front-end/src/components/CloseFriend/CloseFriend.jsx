import './CloseFriend.css';

export default function CloseFriend({ user }) {
  return (
    <li className='sidebarFriend'>
      <img className='sidebarFriendImage' src={user.profilePicture} alt='img' />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
  );
}
