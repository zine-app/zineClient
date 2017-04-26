import * as facebook from 'app/webAPI/facebook'
import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestSignUpWithFacebook } from 'app/webAPI/auth'

export const signUp  = () => dispatch => dispatch(async () => {
    const facebookLoginResponse = await facebook.login()

    if(facebookLoginResponse.error) {
      throw new Error('sign up with facebook failed')
    }

    if (facebookLoginResponse.body.status === 'connected'){
      await dispatch(createFetchAction(
        'AUTH:SIGNUP',
        requestSignUpWithFacebook,
        {
          facebookUserId: facebookLoginResponse.body.authResponse.userID,
          facebookUserAccessToken: facebookLoginResponse.body.authResponse.accessToken,
        }
      )())

    }
})

export const signIn = () => {}
