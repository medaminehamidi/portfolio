import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default ({ component: Component, login, onEnter, ...rest }) => {
  console.warn('booooooooooooom')
  const [isAuthenticated, setisAuthenticated] = useState(false)
  return(
  <Route
    {...rest}
    render={props => {
      return isAuthenticated === true
        ? (<Component {...props} />)
        : (<Redirect to='/login' />)
    }}
  />
  )
}
