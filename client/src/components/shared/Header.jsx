import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let headClass
    this.props.currentUser ? headClass = 'HeaderIn' : headClass = 'Header'
    return (
    <div className={headClass}>
      {this.props.currentUser
        ?

          <> 
            <img src="https://i.imgur.com/Yj2X2wz.png" alt="logo" />
            <div>
              <button className="Logout" onClick={this.props.handleBurger}>samples</button>
              <button className="Logout" onClick={this.props.handleLogout}>logout</button>
            </div>
          </>
       
        :
            <Link to="/login">Login</Link>        }
    </div>
    )
  }
}

export default Header