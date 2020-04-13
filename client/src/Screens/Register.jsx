import React from 'react';
import deskjockeylogo from '../pictures/deskjockeylogo.png'
import deskworker from '../pictures/deskworker.png'

// This component handles our register form
const Register = (props) => {
  const Submit = async (e) => {
    e.preventDefault();
    await props.handleRegister().then(()=> props.history.push(`/home`))
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
        <div>Sign Up</div>
        <form onSubmit={Submit} className="LoginForm">
          <div className="LoginField">
          <label>Username:</label>
          <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
          </div>
          <div className="LoginField">
            <label className="LoginField">Password:</label>
            <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
          </div>
          <button className="LoginButton">Sign Up</button>
        </form>
        <div className="LoginSlogan">All the worlds a stage, and all your drab office is a drum kit</div>
      </div>

    </div>
  );
}

export default Register;