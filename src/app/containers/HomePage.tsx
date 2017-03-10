import * as React from 'react'
import { connect } from 'react-redux'
import { setUser, TSetUser } from 'app/actions/user'
import HomePage from 'app/components/HomePage'
import store from '../store'
import { load as loadFacebookSDK } from 'app/utils/facebook'
import * as facebook from 'app/webAPI/facebook'
import { requestGetMe } from 'app/webAPI/user'
import { once, assign, pick } from 'lodash'
import '../styles/home.scss'
import showAppLoader, { TShowAppLoader } from 'app/actions/UI/appLoader/showAppLoader'
import hideAppLoader, { THideAppLoader } from 'app/actions/UI/appLoader/hideAppLoader'


interface ILoadDependenciesResponse {
  me: webAPI.Response.GetMe,
  facebookLoginStatus: webAPI.Response.FacebookAuthResponse
}

const loadDependencies = once(():Promise<ILoadDependenciesResponse> =>
  new Promise (async (resolve, reject) => {
    let me:webAPI.Response.GetMe, facebookLoginStatus:webAPI.Response.FacebookAuthResponse

    try {
      await loadFacebookSDK()
      me = await requestGetMe()
      facebookLoginStatus = await facebook.getLoginStatus()
    } catch (error) {
      reject(error)
    }

    resolve({ me, facebookLoginStatus })
  }))


type THomePageContainerProps = React.Props<any> & IDispatchProps & IStateProps

const HomePageContainer = ({ setUser, isLoggedIn, showAppLoader, hideAppLoader }:THomePageContainerProps) => {
  showAppLoader()

  loadDependencies()
    .then(({ me, facebookLoginStatus }) => {
      let setUserParams:Partial<Constant.IUser> = assign(pick(me, ['name', 'email', 'profileImageURL']))

      if(facebookLoginStatus.body.status === 'connected') {
          setUserParams.facebookUserId = facebookLoginStatus.body.authResponse.userID
          setUserParams.facebookUserAccessToken = facebookLoginStatus.body.authResponse.accessToken
      }

      setUser(setUserParams)
      hideAppLoader()
    })

    return <HomePage />
}

interface IDispatchProps {
  setUser: TSetUser
  showAppLoader: TShowAppLoader
  hideAppLoader: THideAppLoader
}

const mapDispatchToProps = (dispatch):IDispatchProps => ({
  setUser: (user) => dispatch(setUser(user)),
  showAppLoader: () => dispatch(showAppLoader()),
  hideAppLoader: () => dispatch(hideAppLoader())
})


interface IStateProps {
  isLoggedIn: boolean
}

const mapStateToProps = (state):IStateProps => ({
  isLoggedIn: state.getIn(['user', 'name'])
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
