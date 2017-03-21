import { createAction } from 'redux-actions'

export type TTogglePostModel  =() => Action.CreatorReturnTypes
export const togglePostModel:TTogglePostModel = createAction('UI:POST_MODAL:TOGGLE')

export default togglePostModel
