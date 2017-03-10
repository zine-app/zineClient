import { createAction } from 'redux-actions'

export type THideAppLoader  =() => Action.CreatorReturnTypes
const hideAppLoader:THideAppLoader = createAction('UI:APP_LOADER:HIDE')

export default hideAppLoader
