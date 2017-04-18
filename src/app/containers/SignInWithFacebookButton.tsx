import * as React from 'react'
import { connect } from 'react-redux'
import  loginWithFacebook from 'app/actions/auth/loginWithFacebook'
import  signIn from 'app/actions/auth/signIn'
import SignInWithFacebookButton from 'app/components/SignInWithFacebookButton'
import { withRouter } from 'react-router'

const mapDispatchToProps = (dispatch, { history }) => ({
  signIn: async () => {
    const facebookLoginAction = await dispatch(loginWithFacebook())

    await dispatch(signIn({
      vendor: 'facebook',
      facebookUserId: facebookLoginAction.payload.authResponse.userID,
      facebookUserAccessToken: facebookLoginAction.payload.authResponse.accessToken
    }))

    history.replace('/')
  }
})

export default withRouter(connect(undefined, mapDispatchToProps)(SignInWithFacebookButton))
