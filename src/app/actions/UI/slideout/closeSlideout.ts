import { createAction } from 'redux-actions'

export type TcloseSlideout = () => Action.CreatorReturnTypes
const closeSlideout:TcloseSlideout = createAction('UI:SLIDEOUT:CLOSE')

export default closeSlideout
