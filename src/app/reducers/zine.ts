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
                'headerImageURL',
                'published',
                'deleted'
              ]
            ))
      ),

    throw: (state, action) => state
  },

  "ZINE:FETCH:RESPONSE": {
    next: (state, action) =>
      state.merge(action.payload.map(zine => createZine(zine))),

    throw: (state, action) => state
  },

  "ZINE:DELETE:RESPONSE": {
    next: (state, action) =>
      state.update(
        state.findIndex(zine => zine.id === action.meta.id),
        zine => zine.set('deleted', true)
      ),

    throw: (state, action) => state
  }

}, initialState)
