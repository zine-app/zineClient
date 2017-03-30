import { createUser } from 'app/constants/User'
import { handleActions } from 'redux-actions'
import { List } from 'immutable'
import { pick } from 'lodash'

import { createPost } from 'app/constants/Post'


const initialState = List()

export const postReducer = handleActions({
  "POST:FETCH:RESPONSE": {
    next: (state, action) => state.withMutations(state => {
      action.payload.forEach((post, index) =>
        state = state.update(
          state.find(post => post.id === action.payload[index].id) ?
          state.findIndex(zine => zine.id === action.payload[index].id) :
          state.size,

          createPost(),

          post =>
          post.mergeDeep(
            pick(action.payload[index],
              [
                'id',
                'type',
                'description',
                'title',
                'contentURL',
                'zineId',
                'authorId',
                'createdAt'
              ]
            ))
          )
        )

        return state
      }
    ),

    throw: state => state
  },

  "POST:SAVE:RESPONSE": {
    next: (state, action) => state.update(
      state.find(post => post.id === action.payload.id) ?
      state.findIndex(zine => zine.id === action.payload.id) :
      state.size,

      createPost(),

      post =>
      post.mergeDeep(
        pick(action.payload,
          [
            'id',
            'type',
            'description',
            'title',
            'contentURL',
            'createdAt',
            'zineId',
            'authorId'
          ]
      ))
    ),

    throw: state => state
  }
}, initialState)
