import { createAction } from 'redux-actions'

export type TToggleImageModel  =() => Action.CreatorReturnTypes
export const toggleImageModel:TToggleImageModel = createAction('UI:IMAGE_MODAL:TOGGLE')

export default toggleImageModel
