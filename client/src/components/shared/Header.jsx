import React from 'react'
import { Link } from 'react-router-dom';

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
            <Link to="/login">Login</Link>        }
    </div>
    )
  }
}

export default Header