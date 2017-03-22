import { createAction } from 'redux-actions'

export type TTogglePostModel = ({ transition }?:{ transition?:string }) => Action.CreatorReturnTypes
export const togglePostModel:TTogglePostModel = (options = {}) =>
  createAction('UI:POST_MODAL:TOGGLE')(options)

export default togglePostModel
