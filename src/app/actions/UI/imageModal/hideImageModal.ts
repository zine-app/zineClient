import { createAction } from 'redux-actions'

export type THideImageModel  =() => Action.CreatorReturnTypes
export const hideImageModel:THideImageModel = createAction('UI:IMAGE_MODAL:HIDE')

export default hideImageModel
