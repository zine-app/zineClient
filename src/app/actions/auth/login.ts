import * as facebook from 'app/webAPI/facebook'
import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestSignIn } from 'app/webAPI/auth'

// const loginWithTwitter = createFetchAction('AUTH:TWITTER:LOGIN', () => Promise.resolve())()
// const loginWithEmail= createFetchAction('AUTH:EMIAL:LOGIN', () => Promise.resolve())()

export default ({ vendor }) => dispatch =>
  dispatch(async () => {
    if(vendor === 'facebook') {
      const facebookLoginResponse = await dispatch(createFetchAction('AUTH:FACEBOOK:LOGIN', facebook.login)())
      const facebookUserId = facebookLoginResponse.payload.authResponse.userID
      const facebookUserAccessToken = facebookLoginResponse.payload.authResponse.accessToken

      return await dispatch(createFetchAction('AUTH:ZINE:LOGIN', requestSignIn, {
        vendor: 'facebook',
        facebookUserAccessToken,
        facebookUserId
      })())
    }


    // else if(vendor === 'twitter') return loginWithTwitter
    // else if(vendor === 'email') return loginWithEmail
  })
