import * as React from 'react'
import { setUser, TSetUser } from 'app/actions/user/setUser'
import { connect } from 'react-redux'
import SplashPage from 'app/components/SplashPage'
import HomePage from 'app/components/HomePage'
import store from '../store'
import { load as loadFacebookSDK } from 'app/utils/facebook'
import * as facebook from 'app/webAPI/facebook'
import { requestGetMe } from 'app/webAPI/user'
import { fetchMyZines, TFetchMyZines } from 'app/actions/zine/fetchMyZines'
import { once, assign, pick } from 'lodash'
import showAppLoader, { TShowAppLoader } from 'app/actions/UI/appLoader/showAppLoader'
import hideAppLoader, { THideAppLoader } from 'app/actions/UI/appLoader/hideAppLoader'
import RouteHandler from 'app/containers/RouteHandler'
import 'app/styles/grid'


const loadDependencies = ({ setUser, fetchMyZines }) => async () => {
    await loadFacebookSDK()
    const facebookLoginStatus = await facebook.getLoginStatus()
    const me = await requestGetMe()
    const myZines = await fetchMyZines({ deleted: false })

    let setUserParams:Partial<Constant.IUser> = assign(pick(me.body, ['name', 'email', 'profileImageURL', 'id']))

    if(facebookLoginStatus.body.status === 'connected') {
        setUserParams.facebookUserId = facebookLoginStatus.body.authResponse.userID
        setUserParams.facebookUserAccessToken = facebookLoginStatus.body.authResponse.accessToken
    }

    setUser(setUserParams)
}

interface IDispatchProps {
  setUser: TSetUser
  fetchMyZines: TFetchMyZines
  showAppLoader: TShowAppLoader
  hideAppLoader: THideAppLoader
}

const mapDispatchToProps = (dispatch):IDispatchProps => ({
  setUser: (user) => dispatch(setUser(user)),
  fetchMyZines: (query) => dispatch(fetchMyZines(query)),
  showAppLoader: () => dispatch(showAppLoader()),
  hideAppLoader: () => dispatch(hideAppLoader())
})


interface IStateProps {
  isLoggedIn: boolean
}

const mapStateToProps = (state):IStateProps => ({
  isLoggedIn: !!state.getIn(['user', 'name'])
})

const IndexRouteHandler = ({ isLoggedIn, setUser, showAppLoader, hideAppLoader, fetchMyZines }) =>
  <RouteHandler
    dependencies={loadDependencies({ setUser, fetchMyZines })}
    startLoading={() => showAppLoader()}
    stopLoading={() => hideAppLoader()}
    authorized={() => isLoggedIn}
    success={() => <HomePage />}
    failure={() => <SplashPage />}
  />

export default connect(mapStateToProps, mapDispatchToProps)(IndexRouteHandler)
