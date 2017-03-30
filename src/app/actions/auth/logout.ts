import { requestZineLogout } from 'app/webAPI/auth'
import createFetchAction from 'app/utils/actions/createFetchAction'
import * as facebook from 'app/webAPI/facebook'

export type TLogout = () => Action.CreatorReturnTypes
const logout:TLogout = () => createFetchAction('AUTH:LOGOUT', async () => {
  const facebookLoginStatus = await facebook.getLoginStatus()

  if(facebookLoginStatus.body.status === 'connected') {
    await facebook.logout()
  }

  return await requestZineLogout()
})()

export default logout
