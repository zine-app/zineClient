import { requestZineLogout } from 'app/webAPI/auth'
import createFetchAction from 'app/utils/actions/createFetchAction'
import { setUser } from 'app/actions/user/setUser'


export type TLogout = () => Action.CreatorReturnTypes
const logout:TLogout = () => createFetchAction('AUTH:LOGOUT', requestZineLogout)()

export default logout
