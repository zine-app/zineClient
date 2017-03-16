import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from 'app/reducers'
import reduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { createState } from '../constants/State'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'


const initialState = createState()
const logger = createLogger({
  stateTransformer: state => state.toJS()
})

export default ({ history }) => {
  const middleware = applyMiddleware(
    promiseMiddleware,
    reduxThunk,
    logger,
    routerMiddleware(history)
  )

  return createStore(rootReducer, initialState, middleware)
}
