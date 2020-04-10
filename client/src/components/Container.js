import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Routes from '../routes/Routes' 
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser
} from '../services/api-helper'

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
     // Form data for adding a flavor to a food
      authFormData: {
        username: "",
        password: ""
      },
      loaded: false
    }
  }
  componentDidMount = async () => {
    await this.handleVerify()
  }
    
  handleLoginButton = () => {
    this.props.history.push("/login")
  }
    // handle change function for our create food form
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ formData: { [name]: value } });
    }

    // ====================================
  // ============= Auth =================
  // ====================================

  // Function to login a user
  // we set the user data in state.
  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  // Function to register a user
  // we set the user data in state.
  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
    this.setState({loaded: true})
  }

  // =========================================================================================
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }
  // Function to logout user
  // We delete the token from local storage
  // set the current user in state back to null
  // and call our remove token function to remove
  // the auth headers from our api call
  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    removeToken();
  }

  // Handle change function for the auth forms
  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }
  render() {
    return (
      <div>
        <Header />
        <Routes
          handleLogin={this.handleLogin}
          handleChange={this.authHandleChange}
          handleRegister={this.handleRegister}
          currentUser={this.state.currentUser}
          formData={this.state.authFormData}
          loaded={this.state.loaded}/>
        <Footer/>
      </div>
      
    )
  }
}
export default Container