import React from 'react'
import { Route, Switch, Router, Redirect } from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import AuthenticatedRoute from './AuthenticatedRoute'


const Routes = ({handleLogin, handleChange, handleRegister, formData, currentUser, loaded}) => (
  <Switch>
    
     <Route
      exact
      path="/login"
      render={props => <Login {...props} handleLogin = {handleLogin} handleChange = {handleChange} formData = {formData} />}
    />
    <Route
      exact
      path="/register"
      render={props => <Register {...props} handleRegister = {handleRegister} handleChange = {handleChange} formData = {formData} />}
    />
    <AuthenticatedRoute
      exact
      path="/home"
      user = {currentUser}
      render={props => <Home {...props} currentUser={currentUser} loaded={loaded}/>}
    />
    <Redirect from='/' to='/home'/>
  </Switch>
)

export default Routes