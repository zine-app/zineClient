import * as React from 'react'
import { connect } from 'react-redux'
import signUpWithFacebook from 'app/actions/auth/signUpWithFacebook'


const FacebookLoginButton = ({ login, theme }) =>
  <button
    className={`button__${theme}`}
    onClick={login}
  >
    sign up with Facebook!
  </button>

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(signUpWithFacebook())
})

const mapStateToProps = (state, props:{ theme?:string }) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton)
