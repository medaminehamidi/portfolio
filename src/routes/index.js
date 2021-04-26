import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Home from 'pages/Home'
import Admin from 'pages/Admin'
import { history } from 'store'

export default _ =>
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={HomePath}>
        <Home />
      </Route>
      <Route exact path={AdminPath}>
        <Admin />
      </Route>
    </Switch>
  </ConnectedRouter>

export const HomePath = '/'
export const ErrorPath = '/error'
export const AdminPath = '/admin'
