import { createSlideout } from 'app/constants/UI/Slideout'
import { handleActions } from 'redux-actions'

const initialState = createSlideout()

export const slideoutReducer = handleActions({
  "UI:SLIDEOUT:OPEN": (state, action) => state.merge({ isOpen: true, cardName: action.payload.withCard }),
  "UI:SLIDEOUT:CLOSE": (state, action) => state.merge({ isOpen: false }),
  "UI:SLIDEOUT:TOGGLE": (state, action) =>
    state.merge({
      isOpen:
        (action.payload.withCard !== state.get('cardName') && !state.get('isOpen')) ||
        !(action.payload.withCard === state.get('cardName') && state.get('isOpen')),
      cardName: action.payload.withCard
    })
}, initialState)
