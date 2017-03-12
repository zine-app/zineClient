import { createAction } from 'redux-actions'

export type TtoggleSlideout = ({ withCard }?:{ withCard ?: string}) => Action.CreatorReturnTypes
const toggleSlideout:TtoggleSlideout = ({ withCard = 'default' }) => createAction('UI:SLIDEOUT:TOGGLE')({ withCard })

export default toggleSlideout
