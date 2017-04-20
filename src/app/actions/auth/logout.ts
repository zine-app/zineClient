import { requestZineLogout } from 'app/webAPI/auth'
import { requestGetMe } from 'app/webAPI/user'
import createFetchAction from 'app/utils/actions/createFetchAction'
import * as facebook from 'app/webAPI/facebook'

export default () => dispatch =>
  dispatch(async () => {
      const facebookLoginStatus = await facebook.getLoginStatus()

      if(facebookLoginStatus.body.status === 'connected') {
        await facebook.logout()
      }

      await dispatch(createFetchAction('AUTH:LOGOUT', requestZineLogout)())
      await requestZineLogout()
      await dispatch(createFetchAction('AUTH:ME', requestGetMe)())
  })
