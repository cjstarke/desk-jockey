import React from 'react';
import { Link } from 'react-router-dom';



// This component handles our login form and has a link to the register form
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false
    }
  }

  Submit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    })
    await this.props.handleLogin().then(()=>
     {this.props.history.push(`/home`)},()=>{
       this.setState({
         loading: false,
         error : true
       })
     })

  }

render () {
let fill = (<div className="LoginSlogan">All the worlds a stage, and all your drab office is a drum kit</div>)
 if(this.state.loading) {
   fill = ( <div className="lds-ring"><div></div><div></div><div></div><div></div></div>)
 }
 else if (this.state.error) {
   fill = (<div className="LoginSLogan">Sorry, try again</div>)
 }


  return (
    <div className= "LoginPage">
      <div className = "LoginImages">
        <div className= "LoginLogo">
          <img src="https://i.imgur.com/kwvubEP.png" alt="logo"/>
        </div>
        <div className="LoginDesk">
          <img src="https://i.imgur.com/QH3ZKQi.png" alt="desk"/>
        </div>
      </div>
      <div className="LoginProcess">
        <div>Login</div>
        <form className="LoginForm" onSubmit={this.Submit} >
          <div className="LoginField">
            <label>Username:</label>
            <input name="username" type="text" value={this.props.formData.username} onChange={this.props.handleChange} />
          </div>
          <div className="LoginField">
            <label>Password:</label>
            <input name="password" type="password" value={this.props.formData.password} onChange={this.props.handleChange} />
          </div>
          
          <button className="LoginButton">Login</button>
          <span>or  <Link to="/register">Sign up</Link></span>
        </form>
        {fill}
      </div>
     
    </div>
  );
}

}

export default Login;