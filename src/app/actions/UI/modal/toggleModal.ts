import { createAction } from 'redux-actions'

interface ToggleModalProps {
  transition?:string
  modalName:string
  props?:any
}

export type TToggleModel = (ToggleModalProps) => Action.CreatorReturnTypes

export const toggleModel:TToggleModel = (options) =>
  createAction('UI:MODAL:TOGGLE')(options)

export default toggleModel
