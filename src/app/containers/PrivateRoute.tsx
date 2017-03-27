import * as React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import getMyUser from 'app/selectors/me/getMyUser'
import Bundle from 'app/containers/Bundle'
import AppLoader from 'app/components/AppLoader'
import ErrorPage from 'app/components/ErrorPage'
import fetchMe from 'app/actions/user/fetchMe'


const PrivateRoute = ({ me, fetchMe, component, ...rest}) => {
  if(me) {
    return (
      <Route
        {...rest}
        render={props =>
          me.name ?
          React.createElement(component, props):
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        }
      />
    )
  } else {
    fetchMe()
    return <AppLoader shouldDisplay={true} />
  }
}


const mapStateToProps = state => ({
  me: getMyUser(state)
})

const mapDispatchToProps = dispatch => ({
  fetchMe: () => dispatch(fetchMe())
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
