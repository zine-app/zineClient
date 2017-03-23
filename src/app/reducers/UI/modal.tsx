import { createModal } from 'app/constants/UI/Modal'
import { handleActions } from 'redux-actions'
import { pick, assign } from 'lodash'

const initialState = createModal()

export const modalReducer = handleActions({
  "UI:MODAL:SHOW": (state, action) =>
  state.merge(assign(
    pick(
      action.payload,
      [
        'transition',
        'props',
        'name'
      ]
    ),
    { shouldDisplay: true }
  )),

  "UI:MODAL:HIDE": (state, action) =>
    state.merge(assign(
      pick(
        action.payload,
        [
          'transition',
          'props',
          'name'
        ]
      ),
      { shouldDisplay: false }
    )),

  "UI:MODAL:TOGGLE": (state, action) =>
    state.merge(assign(
      pick(
        action.payload,
        [
          'transition',
          'props',
          'name'
        ]
      ),
      { shouldDisplay: !state.shouldDisplay }
    ))
}, initialState)
