import { List } from 'immutable'
import { createUser } from 'app/constants/User'
import { handleActions } from 'redux-actions'
import { pick, isArray } from 'lodash'

const initialState = List()

export const userReducer = handleActions({
  "USERS:FETCH:RESPONSE": {
    next: (state, action) => {
      const response = isArray(action.payload) ? action.payload : [action.payload]

      return response.reduce((state, newUser) => {
        return state.update(
          state.find(user => user.id === newUser.id) ?
            state.indexOf(user => user.id === newUser.id) :
            state.size,

          createUser(),

          user => user.merge(pick(newUser, [
            'id',
            'name',
            'email',
            'profileImageURL'
          ]))
        )
      }, state)

    }

  },

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
          'profileImageURL'
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
          'profileImageURL'
        ]))
      ),

    throw: (state, action) => state
  },


  "AUTH:SIGNUP:RESPONSE": {
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
          'profileImageURL'
        ]))
      ),

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
          'profileImageURL'
        ]))
    ),

    throw: (state, action) => state
  }

}, initialState)
