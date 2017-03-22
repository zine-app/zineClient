import { createAction } from 'redux-actions'

export type THideImageModel = ({ transition }?:{ transition?:string }) => Action.CreatorReturnTypes
export const hideImageModel:THideImageModel = (options = {}) =>
  createAction('UI:IMAGE_MODAL:HIDE')(options)

export default hideImageModel
