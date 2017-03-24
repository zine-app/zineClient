import React from 'react'
import { connect } from 'react-redux'
import LogoutButton from 'app/components/LogoutButton'
import logout, { TLogout } from 'app/actions/auth/logout'
import { withRouter } from 'react-router'

type LogoutButtonContainerProps = React.Props<any> & IDispatchProps
const LogoutButtonContainer = ({ logout }:LogoutButtonContainerProps) =>
  <LogoutButton logout={logout} />


interface IDispatchProps {
  logout:TLogout
}

const mapDispatchToProps = (dispatch, { history }):IDispatchProps => ({
  logout: () => {

    return dispatch(logout()).then(() => history.push('/'))
  }
})

export default withRouter(connect(undefined, mapDispatchToProps)(LogoutButtonContainer))
