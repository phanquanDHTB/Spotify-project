import React from 'react'
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token")
    // console.log("tokennnn", token);
    return(
    <Route {...rest} render={(props) => (
    //   fakeAuth.isAuthenticated === true
    token ? <Component {...props} /> : <Redirect to='/login' />
    )} />
  )}

  export default PrivateRoute;