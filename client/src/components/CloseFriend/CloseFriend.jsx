import './CloseFriend.css';

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  return (
    <li className='sidebarFriend'>
      <img
        className='sidebarFriendImage'
        src={PF + user.profilePicture}
        alt='img'
      />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
  );
}
