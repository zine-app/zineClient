import { List } from 'immutable'
import { handleActions } from 'redux-actions'
import { pick } from 'lodash'
import { createZine } from 'app/constants/Zine'

const initialState = List()

export const zineReducer = handleActions({
  "ZINE:SAVE": {
    next: (state, action) =>
      state.update(
        state.findIndex(zine => zine.name === action.payload.name),
        createZine(),
        zine =>
          zine.merge(
            pick(action.payload,
              [
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

}, initialState)
