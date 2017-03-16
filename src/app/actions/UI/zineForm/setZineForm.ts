import { createAction } from 'redux-actions'

export type TsetZineForm = ({ currentZine }:{currentZine:string}) => Action.CreatorReturnTypes
const setZineForm:TsetZineForm = createAction('UI:ZINEFORM:SET')

export default setZineForm
