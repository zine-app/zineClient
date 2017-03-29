import { createAction } from 'redux-actions'

export type TShowModel = ({ transition }?:{ transition?:string }) => Action.CreatorReturnTypes
export const showModel:TShowModel = (options = {}) =>
  createAction('UI:MODAL:SHOW')(options)

export default showModel
