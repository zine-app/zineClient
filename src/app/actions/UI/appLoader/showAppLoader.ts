import { createAction } from 'redux-actions'

export type TShowAppLoader  =() => Action.CreatorReturnTypes
export const showAppLoader:TShowAppLoader = createAction('UI:APP_LOADER:SHOW')

export default showAppLoader
