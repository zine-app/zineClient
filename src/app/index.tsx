import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from 'app/containers/App'
import store from './store'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'

const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:zineName?" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
