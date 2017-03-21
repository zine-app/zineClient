import { createAction } from 'redux-actions'

export type THidePostModel  =() => Action.CreatorReturnTypes
export const hidePostModel:THidePostModel = createAction('UI:POST_MODAL:HIDE')

export default hidePostModel
