import { createUser } from 'app/constants/User'
import { handleActions } from 'redux-actions'
import { pick } from 'lodash'

const initialState = createUser()

export const userReducer = handleActions({
  "USER:SET": {
    next: (state, action) =>
      state.merge(
        pick(action.payload,
          [
            'id',
            'name',
            'email',
            'profileImageURL',
            'facebookUserId',
            'facebookUserAccessToken'
          ]
      )),

    throw: (state, action) => state
  },


  "USER:SAVE:RESPONSE": {
    next: (state, action) =>
      state.merge(
        pick(action.payload,
          [
            'name',
            'email',
            'profileImageURL',
            'facebookUserId',
            'facebookUserAccessToken'
          ]
      )),

    throw: (state, action) => state
  },


  "AUTH:ZINE:SIGNUP:RESPONSE": {
    next: (state, action) =>
      state.merge(
        pick(action.payload,
          [
            'name',
            'email',
            'profileImageURL',
            'facebookUserId',
            'facebookUserAccessToken'
          ]
      )),

    throw: (state, action) => state
  },


  "AUTH:LOGOUT:RESPONSE": {
    next: (state, action) =>
      state.merge({
        name: '',
        email: '',
        profileImageURL: ''
      }),

    throw: (state, action) => state
  }

}, initialState)
