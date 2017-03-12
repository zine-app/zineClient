import { createAction } from 'redux-actions'

export type TopenSlideout  =() => Action.CreatorReturnTypes
const openSlideout:TopenSlideout = createAction('UI:SLIDEOUT:OPEN')

export default openSlideout
