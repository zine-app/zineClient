import { createAction } from 'redux-actions'

export type TShowImageModel = ({ transition }?:{ transition?:string }) => Action.CreatorReturnTypes
export const showImageModel:TShowImageModel = (options = {}) =>
  createAction('UI:IMAGE_MODAL:SHOW')(options)

export default showImageModel
