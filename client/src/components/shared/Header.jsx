import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
    <>
      {this.props.currentUser
        ?
        <div>
          {/* This is a greeting to the user if there user info has been set in state.
          We use the guard operator to check '&&' */}
          <h3>Hi {this.state.currentUser && this.state.currentUser.email}<button onClick={this.props.handleLogout}>logout</button></h3>
        </div>
        :
        <button onClick={this.props.handleLoginButton}>Login/register</button>
        }
        </>
    )
  }
}

export default Header