import { createUser } from 'app/constants/User'
import { handleActions } from 'redux-actions'
import { pick } from 'lodash'

const initialState = createUser()

export const userReducer = handleActions({
  "USER:SET": (state, action) =>
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
    "USER:SAVE": (state, action) =>
      state.merge(
        pick(action.payload,
          [
            'name',
            'email',
            'profileImageURL',
            'facebookUserId',
            'facebookUserAccessToken'
          ]
      ))
}, initialState)