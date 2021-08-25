import './login.css';

export default function Login() {
  const handleSubmit = () => {
    return;
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
            <input placeholder='Email' type="email" className='loginInput' />
            <input
              placeholder='Password'
              type='password'
              className='loginInput'
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
