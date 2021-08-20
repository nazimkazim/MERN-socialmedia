import './register.css';

export default function Register() {
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
            <input placeholder='Username' className='loginInput' />
            <input placeholder='Email' className='loginInput' />
            <input placeholder='Password' className='loginInput' />
            <input placeholder='Confirm Password' className='loginInput' />
            <button className='loginButton'>Sign up</button>
            <button className='loginRegisterButton'>Log into account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
