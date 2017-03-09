import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutablejs'
import { userReducer } from 'app/reducers/user'
import reduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { createState } from '../constants/State'
import createLogger from 'redux-logger'

const rootReducer = combineReducers({ user: userReducer })
const initialState = createState()
const logger = createLogger({
  stateTransformer: state => state.toJS()
})
const middleware = applyMiddleware(promiseMiddleware, reduxThunk, logger)

export default createStore(rootReducer, initialState, middleware)
