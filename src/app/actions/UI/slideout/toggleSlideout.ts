import { createAction } from 'redux-actions'

export type TtoggleSlideout  =() => Action.CreatorReturnTypes
const toggleSlideout:TtoggleSlideout = createAction('UI:SLIDEOUT:TOGGLE')

export default toggleSlideout
