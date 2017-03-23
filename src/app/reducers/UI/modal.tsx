import { createModal } from 'app/constants/UI/Modal'
import { handleActions } from 'redux-actions'

const initialState = createModal()

export const modalReducer = handleActions({
  "UI:MODAL:SHOW": (state, action) =>
    state.merge({
      shouldDisplay: true,
      transition: action.payload.transition
    }),

  "UI:MODAL:HIDE": (state, action) =>
    state.merge({
      shouldDisplay: false,
      transition: action.payload.transition
    }),

  "UI:MODAL:TOGGLE": (state, action) =>
    state.merge({
      shouldDisplay: !state.shouldDisplay,
      transition: action.payload.transition
    })
}, initialState)
