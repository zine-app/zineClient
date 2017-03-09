import * as React from 'react'
import { connect } from 'react-redux'
import { setUser, TsetUser } from 'app/actions/user'
import HomePage from 'app/components/HomePage'
import store from '../store'
import facebook from 'app/utils/facebook'
import { requestGetMe } from 'app/webAPI/user'
import '../styles/home.scss'
import { once, assign, pick } from 'lodash'


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
      let setUserParams:any = assign(pick(me, ['name', 'email', 'profileImageURL']))

      if(facebookLoginStatus.status === 'connected') {
          setUserParams.facebookUserId = facebookLoginStatus.authResponse.userID
          setUserParams.facebookUserAccessToken = facebookLoginStatus.authResponse.accessToken
      }

      setUser({  })
    })

    return <HomePage />
}


interface IDispatchProps {
  setUser: TsetUser
}

const mapDispatchToProps = (dispatch):IDispatchProps => ({
  setUser: (user) => dispatch(setUser(user))
})


interface IStateProps {
  isLoggedIn: boolean
}

const mapStateToProps = (state:State):IStateProps => ({
  isLoggedIn: state.getIn(['user', 'name'])
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
