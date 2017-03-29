import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
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

const mapDispatchToProps = (dispatch, { history }) => ({
  login: () => dispatch(signUpWithFacebook())
    .then(() => history.push('/'))
})

const mapStateToProps = (state, props:{ theme?:string }) => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton))
