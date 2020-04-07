import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import Home from '../screens/Home'
const Routes = (props) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <Home {...props} />}
    />
  </Switch>
)

export default Routes