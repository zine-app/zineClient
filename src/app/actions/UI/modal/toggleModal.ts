import { createAction } from 'redux-actions'

export type TToggleModel = ({ transition }?:{ transition?:string }) => Action.CreatorReturnTypes
export const toggleModel:TToggleModel = (options = {}) =>
  createAction('UI:MODAL:TOGGLE')(options)

export default toggleModel
