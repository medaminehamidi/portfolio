import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Home from 'pages/Home'
import { history } from 'store'

export default _ =>
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={HomePath}>
        <Home />
      </Route>
    </Switch>
  </ConnectedRouter>

export const HomePath = '/'
export const ErrorPath = '/error'
