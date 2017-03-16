import { List } from 'immutable'
import { handleActions } from 'redux-actions'
import { pick } from 'lodash'
import { createZine } from 'app/constants/Zine'

const initialState = List()

export const zineReducer = handleActions({
  "ZINE:SAVE:RESPONSE": {
    next: (state, action) =>
      state.update(
        state.find(zine => zine.id === action.payload.id) ?
          state.findIndex(zine => zine.id === action.payload.id) :
          state.size,

        createZine(),

        zine =>
          zine.merge(
            pick(action.payload,
              [
                'id',
                'name',
                'description',
                'categories',
                'iconImageURL',
                'published'
              ]
            ))
      ),

    throw: (state, action) => state
  },

  "ZINE:FETCH:RESPONSE": {
    next: (state, action) =>
      state.merge(action.payload.map(zine => createZine(zine)))
    ,

    throw: (state, action) => state
  }

}, initialState)
