import { useRef } from 'react';
import './login.css';

export default function Login() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(email.current && email.current.value)
    console.log(password.current && password.current.value)
  }
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
          <form className='loginBox' onSubmit={handleSubmit}>
            <input
              placeholder='Email'
              type="email"
              className='loginInput'
              ref={email}
              required
            />
            <input
              placeholder='Password'
              type='password'
              className='loginInput'
              ref={password}
              required
            />
            <button className='loginButton'>Log in</button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
