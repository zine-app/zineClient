import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import routes from './routes'
import store from './store'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

const history = createHistory()

ReactDOM.render(
  <Provider store={store(history)}>
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
