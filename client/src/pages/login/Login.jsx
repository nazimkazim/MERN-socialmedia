import './login.css';

export default function Login() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Nazimsocial</h3>
          <span className='logiDesc'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='Email' className='loginInput' />
            <input placeholder='Password' className='loginInput' />
            <button className='loginButton'>Log in</button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
