import React from 'react';
import { Link } from 'react-router-dom';
import deskjockeylogo from '../pictures/deskjockeylogo.png'
import deskworker from '../pictures/deskworker.png'


// This component handles our login form and has a link to the register form
const Login = (props) => {

  const Submit = async (e) => {
    e.preventDefault();
    await props.handleLogin().then(()=> props.history.push(`/home`))

  }

  return (
    <div className= "LoginPage">
      <div className = "LoginImages">
        <div className= "LoginLogo">
          <img src={deskjockeylogo} alt="logo"/>
        </div>
        <div className="LoginDesk">
          <img src={deskworker} alt="desk"/>
        </div>
      </div>
      <div className="LoginProcess">
        <div>login</div>
        <form className="LoginForm" onSubmit={Submit} >
          <div className="LoginField">
            <label>Username:</label>
            <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
          </div>
          <div className="LoginField">
            <label>Password:</label>
            <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
          </div>
          
          <button className="LoginButton">Login</button>
          <Link to="/register">Register</Link>
        </form>
      </div>
     
    </div>
  );
}

export default Login;