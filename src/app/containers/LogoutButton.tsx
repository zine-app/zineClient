import React from 'react'
import { connect } from 'react-redux'
import LogoutButton from 'app/components/LogoutButton'
import logout from 'app/actions/auth/logout'

const LogoutButtonContainer = ({ logout }) =>
  <LogoutButton logout={logout} />


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(undefined, mapDispatchToProps)(LogoutButtonContainer)
