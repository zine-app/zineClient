import { createAction } from 'redux-actions'

export type TShowImageModel  =() => Action.CreatorReturnTypes
export const showImageModel:TShowImageModel = createAction('UI:IMAGE_MODAL:SHOW')

export default showImageModel
