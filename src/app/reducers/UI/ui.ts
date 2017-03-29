import { handleActions } from 'redux-actions'
import { createUI } from 'app/constants/UI/UI'
import { Map } from 'immutable'

const initialState = Map()

export const uiReducer = handleActions({
  "UI:CREATE": (state, action) =>
    state.set(action.meta.name, createUI()),

  "UI:PROPS:SET": (state, action) =>
    state.update(action.meta.name, UI => UI.set('props', action.payload)),

  "UI:LOADING:START": (state, action) =>
    state.update(action.meta.name, UI => UI.set('loading', true)),

  "UI:LOADING:STOP": (state, action) =>
    state.update(action.meta.name, UI => UI.set('loading', false)),

  "UI:ERROR:SET": (state, action) =>
    state.update(action.meta.name, UI =>
      UI.set('error', new Error(action.payload.message))),

  "UI:ERROR:UNSET": (state, action) =>
    state.update(action.meta.name, UI =>
      UI.set('error', null))
}, initialState)
