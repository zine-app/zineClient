import * as React from 'react'
import { connect } from 'react-redux'
import signUpWithFacebook from 'app/actions/auth/signUpWithFacebook'
import showAppLoader from 'app/actions/UI/appLoader/showAppLoader'
import hideAppLoader from 'app/actions/UI/appLoader/hideAppLoader'


const FacebookLoginButton = ({ login, theme }) =>
  <button
    className={`button__${theme}`}
    onClick={login}
  >
    sign up with Facebook!
  </button>

const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch(showAppLoader())
    dispatch(signUpWithFacebook())
      .then(() => dispatch(hideAppLoader()))
  }
})

const mapStateToProps = (state, props:{ theme?:string }) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton)
