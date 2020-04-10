import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRoute = ({
  component: Component,
  children,
  user,
  loaded,
  render,
  ...rest
}) => {

  if (render && localStorage.getItem("authToken")) {

    return <Route {...rest} render={render} />
  } else {
    return (
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem("authToken") ? <Component {...props} /> : <Redirect to='/' />
        }
      />
    )
  }
}

export default AuthenticatedRoute