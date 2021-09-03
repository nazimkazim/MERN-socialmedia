import axios from 'axios';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './register.css';

export default function Register() {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordAgain = useRef<HTMLInputElement>(null);
  const history = useHistory()

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.current && passwordAgain.current && username.current && email.current) {
      if (password.current.value !== passwordAgain.current.value) {
        password.current.setCustomValidity('Passwords do not match');
      } else {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          passwordAgain: passwordAgain.current.value,
        }
        try {
          await axios.post("/auth/register", user)
          history.push("/login")
        } catch (error) {
          console.log(error)
        }

      }
    }

  };
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Nazimsocial</h3>
          <span className='loginDesc'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onClick={handleClick}>
            <input
              placeholder='Username'
              ref={username}
              className='loginInput'
            />
            <input placeholder='Email' ref={email} className='loginInput' />
            <input
              placeholder='Password'
              ref={password}
              className='loginInput'
            />
            <input
              placeholder='Confirm Password'
              ref={passwordAgain}
              className='loginInput'
            />
            <button className='loginButton'>Sign up</button>
            <button className='loginRegisterButton'>Log into account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
