import { createAction } from 'redux-actions'

export type TopenSlideout = ({ withCard }?:{ withCard ?: string}) => Action.CreatorReturnTypes
const openSlideout:TopenSlideout = ({ withCard = 'default' }) => createAction('UI:SLIDEOUT:OPEN')({ withCard })

export default openSlideout
