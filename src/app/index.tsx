import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import store from './store'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router } from 'react-router-dom'

const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
)
