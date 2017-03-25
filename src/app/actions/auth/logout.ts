import { requestZineLogout } from 'app/webAPI/auth'
import createFetchAction from 'app/utils/actions/createFetchAction'

export type TLogout = () => Action.CreatorReturnTypes
const logout:TLogout = () => createFetchAction('AUTH:LOGOUT', requestZineLogout)()

export default logout
