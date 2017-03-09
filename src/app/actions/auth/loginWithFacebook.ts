import { login as requestLoginWithFacebook } from 'app/utils/facebook'
import { login as requestLoginWithZine } from 'app/webAPI/auth'
import facebook from 'app/utils/facebook'
import { set as setUser } from 'app/actions/user'

export default () => async (dispatch, getState) => {
  let facebookUserId:string = getState().getIn(['user', 'facebookUserId'])
  let facebookUserAccessToken:string = getState().getIn(['user', 'facebookUserAccessToken'])

  if(!facebookUserId) {
    const facebookLoginResponse:any = await facebook.login()
    facebookUserId = facebookLoginResponse.authResponse.userID
    facebookUserAccessToken = facebookLoginResponse.authResponse.accessToken
  }

  const zineLoginResponse:ZineLoginResponse =
    await requestLoginWithZine({
      facebookUserId,
      facebookUserAccessToken,
      vendor: 'facebook'
    })

  dispatch(setUser({
    facebookUserId,
    facebookUserAccessToken,
    name: zineLoginResponse.name,
    email: zineLoginResponse.email,
    profileImageURL: zineLoginResponse.profileImageURL
  }))
}
