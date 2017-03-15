import { createAction } from 'redux-actions'

export type TsetZineForm = ({ currentZine }) => Action.CreatorReturnTypes
const setZineForm:TsetZineForm = createAction('UI:ZINEFORM:SET')

export default setZineForm
