import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default ({ component: Component, login, onEnter, ...rest }) => {
  console.warn('booooooooooooom')

  const isAuth = useSelector(state => state.auth.match)
  return(
  <Route
    {...rest}
    render={props => {
      return isAuth
        ? (<Component {...props} />)
        : (<Redirect to='/login' />)
    }}
  />
  )
}
