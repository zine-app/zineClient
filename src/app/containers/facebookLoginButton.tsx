import * as React from 'react'
import { connect } from 'react-redux'
import loginWithFacebook from 'app/actions/auth/loginWithFacebook'


const FacebookLoginButton = ({ login, theme }) =>
  <button
    className={`button__${theme}`}
  >
    sign up with Facebook!
  </button>

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginWithFacebook())
})

const mapStateToProps = (state, props:{ theme?:string }) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton)
