import { createImageModal } from 'app/constants/UI/ImageModal'
import { handleActions } from 'redux-actions'

const initialState = createImageModal()

export const imageModalReducer = handleActions({
  "UI:IMAGE_MODAL:SHOW": (state, action) => state.merge({ shouldDisplay: true }),
  "UI:IMAGE_MODAL:HIDE": (state, action) => state.merge({ shouldDisplay: false }),
  "UI:IMAGE_MODAL:TOGGLE": (state, action) => state.merge({ shouldDisplay: !state.shouldDisplay })
}, initialState)
