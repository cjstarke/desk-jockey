import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
    <div className='Header'>
      {this.props.currentUser
        ?

         <> <div>{this.props.currentUser.username}</div><button className="Logout" onClick={this.props.handleLogout}>logout</button></>
       
        :
        <button className="Logout" onClick={this.props.handleLoginButton}>Login</button>
        }
    </div>
    )
  }
}

export default Header