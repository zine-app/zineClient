import { createAction } from 'redux-actions'

export type THidePostModel = ({ transition }?:{ transition?:string }) => Action.CreatorReturnTypes
export const hidePostModel:THidePostModel = (options = {}) =>
  createAction('UI:POST_MODAL:HIDE')(options)

export default hidePostModel
