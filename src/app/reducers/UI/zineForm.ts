import { createZineForm } from 'app/constants/UI/ZineForm'
import { handleActions } from 'redux-actions'
import { pick } from 'lodash'

const initialState = createZineForm()

export const zineFormReducer = handleActions({
  "UI:ZINEFORM:SET": (state, action) => state.merge(pick(action.payload, ['currentZine']))
}, initialState)
