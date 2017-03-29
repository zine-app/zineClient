import { createAction } from 'redux-actions'

export type THideModel = ({ transition }?:{ transition?:string }) => Action.CreatorReturnTypes
export const hideModel:THideModel = (options = {}) =>
  createAction('UI:MODAL:HIDE')(options)

export default hideModel
