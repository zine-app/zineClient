import { List } from 'immutable'
import { createUser } from 'app/constants/User'
import { handleActions } from 'redux-actions'
import { pick } from 'lodash'

const initialState = List()

export const userReducer = handleActions({
  "USER:SET": {
    next: (state, action) =>
      state.update(
        state.find(user => user.id === action.payload.id) ?
          state.indexOf(user => user.id === action.payload.id) :
          state.size,

        createUser(),

        user => user.merge(pick(action.payload, [
          'id',
          'name',
          'email',
          'profileImageURL',
          'facebookUserId',
          'facebookUserAccessToken'
        ]))
      ),

    throw: (state, action) => state
  },


  "USER:SAVE:RESPONSE": {
    next: (state, action) =>
      state.update(
        state.find(user => user.id === action.payload.id) ?
          state.indexOf(user => user.id === action.payload.id) :
          state.size,

        createUser(),

        user => user.merge(pick(action.payload, [
          'id',
          'name',
          'email',
          'profileImageURL',
          'facebookUserId',
          'facebookUserAccessToken'
        ]))
      ),

    throw: (state, action) => state
  },


  "AUTH:ZINE:SIGNUP:RESPONSE": {
    next: (state, action) =>
      state.update(
        state.find(user => user.id === action.payload.id) ?
          state.indexOf(user => user.id === action.payload.id) :
          state.size,

        createUser(),

        user => user.merge(pick(action.payload, [
          'id',
          'name',
          'email',
          'profileImageURL',
          'facebookUserId',
          'facebookUserAccessToken'
        ]))
      ),

    throw: (state, action) => state
  },


  "AUTH:LOGOUT:RESPONSE": {
    next: (state, action) => state.clear(),
    throw: (state, action) => state
  },


  "AUTH:ME:RESPONSE": {
    next: (state, action) => state.update(
      state.find(user => user.id === action.payload.id) ?
        state.indexOf(user => user.id === action.payload.id) :
        state.size,

      createUser(),

      user => user.merge(pick(action.payload, [
          'id',
          'name',
          'email',
          'profileImageURL',
          'facebookUserId',
          'facebookUserAccessToken'
        ]))
    ),

    throw: (state, action) => state
  }

}, initialState)
