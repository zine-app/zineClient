import { createMe } from 'app/constants/Me'
import { handleActions } from 'redux-actions'
import { pick } from 'lodash'

const initialState = createMe()

export const meReducer = handleActions({
  "AUTH:SIGNUP:RESPONSE": {
    next: (state, action) => state.set('userId', action.payload.id),
    throw: (state, action) => state
  },

  "AUTH:LOGOUT:RESPONSE": {
    next: (state, action) => state.set('userId', ''),
    throw: (state, action) => state
  },

  "AUTH:ME:RESPONSE": {
    next: (state, action) => state.set('userId', action.payload.id),
    throw: (state, action) => state
  }
}, initialState)
