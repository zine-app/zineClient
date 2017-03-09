import * as React from 'react'
import { connect } from 'react-redux'
import { setUser } from 'app/actions/user'
import HomePage from 'app/components/HomePage'
import store from '../store'
import facebook from 'app/utils/facebook'
import { requestGetMe } from 'app/webAPI/user'
import { once, assign, pick } from 'lodash'
import '../styles/home.scss'


interface ILoadDependenciesResponse {
  me: RequestGetMeResponse,
  facebookLoginStatus: facebook.AuthResponse
}

const loadDependencies = once(():Promise<ILoadDependenciesResponse> =>
  new Promise (async (resolve, reject) => {
    let me:RequestGetMeResponse, facebookLoginStatus:facebook.AuthResponse

    try {
      await facebook.load()
      me = await requestGetMe()
      facebookLoginStatus = await facebook.getLoginStatus()
    } catch (error) {
      reject(error)
    }

    resolve({ me, facebookLoginStatus })
  }))


type THomePageContainerProps = React.Props<any> & IDispatchProps & IStateProps

const HomePageContainer = ({ setUser, isLoggedIn }:THomePageContainerProps) => {
  loadDependencies()
    .then(({ me, facebookLoginStatus }) => {
      let setUserParams:Partial<IUser> = assign(pick(me, ['name', 'email', 'profileImageURL']))

      if(facebookLoginStatus.status === 'connected') {
          setUserParams.facebookUserId = facebookLoginStatus.authResponse.userID
          setUserParams.facebookUserAccessToken = facebookLoginStatus.authResponse.accessToken
      }

      setUser(setUserParams)
    })

    return <HomePage />
}

interface IDispatchProps {
  setUser: Action.TsetUser
}

const mapDispatchToProps = (dispatch):IDispatchProps => ({
  setUser: (user) => dispatch(setUser(user))
})


interface IStateProps {
  isLoggedIn: boolean
}

const mapStateToProps = (state):IStateProps => ({
  isLoggedIn: state.getIn(['user', 'name'])
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
