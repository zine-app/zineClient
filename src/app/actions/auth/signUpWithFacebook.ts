import * as facebook from 'app/webAPI/facebook'
import { createAction } from 'redux-actions'
import loginWithFacebook from 'app/actions/auth/loginWithFacebook'
import signUpWithZine from 'app/actions/auth/signUpWithZine'

export default () => (dispatch, getState) =>
  dispatch(createAction('AUTH:SIGNUP', async () => {
    const user = getState().get('user')

    let facebookUserId:string = user.get('facebookUserId')
    let facebookUserAccessToken:string = user.get('facebookUserAccessToken')


    if(!facebookUserId) {

      const facebookLoginResponse = await dispatch(loginWithFacebook())

      if(facebookLoginResponse.error) {
        throw new Error('sign up with facebook failed')
      }

      if (facebookLoginResponse.payload.status === 'connected'){
        facebookUserId = facebookLoginResponse.payload.authResponse.userID
        facebookUserAccessToken = facebookLoginResponse.payload.authResponse.accessToken
      }
    }

    if(facebookUserId && facebookUserAccessToken) {
      await dispatch(signUpWithZine({
        facebookUserId,
        facebookUserAccessToken,
        vendor: 'facebook'
      }))
    } else {
      throw new Error('sign up with facebook failed')
    }
  })())
