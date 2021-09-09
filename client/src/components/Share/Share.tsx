import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import './share.css';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Share:React.FC = () => {
  const { user } = useContext(AuthContext);

  const PF: string = process.env.REACT_APP_PUBLIC_URL;

  const desc = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState(null);

  const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      userId:user._id,
      desc: desc.current.value
    }

    try {
      await axios.post("/posts", newPost);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            className='shareProfilePicture'
            src={user?.profilePicture ? PF + user['profilePicture'] : PF + "person/no_avatar.png"}
            alt=''
          />
          <input
            placeholder={`What's in your mind ${user.username}?`}
            type='text'
            className='shareInput'
            ref={desc}
          />
        </div>
        <hr className='shareHr' />
        <form className="shareBottom" onSubmit={submitHandler}>
        <div className='shareOptions'>
          <label htmlFor="file" className='shareOption'>
            <PermMedia htmlColor='tomato' className='shareIcon' />
            <span className='shareOptionText'>Video</span>
            <input style={{display:'none'}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])}/>
          </label>
          <div className='shareOption'>
            <Label htmlColor='blue' className='shareIcon' />
            <span className='shareOptionText'>Tag</span>
          </div>
          <div className='shareOption'>
            <Room htmlColor='green' className='shareIcon' />
            <span className='shareOptionText'>Location</span>
          </div>
          <div className='shareOption'>
            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
            <span className='shareOptionText'>Feelings</span>
          </div>
          <button className='shareButton'>Share</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Share;
