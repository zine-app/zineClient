import { createAction } from 'redux-actions'

export type TToggleImageModel = ({ transition }?:{ transition?:string }) => Action.CreatorReturnTypes
export const toggleImageModel:TToggleImageModel = (options = {}) =>
  createAction('UI:IMAGE_MODAL:TOGGLE')(options)

export default toggleImageModel
