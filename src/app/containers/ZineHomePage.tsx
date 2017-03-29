import * as React from 'react'
import { connect } from 'react-redux'
import ZineHomePage from 'app/components/ZineHomePage'
import ErrorPage from 'app/components/ErrorPage'
import AppLoader from 'app/components/AppLoader'
import fetchZine from 'app/actions/zine/fetchZine'
import createUI from 'app/containers/UI'

const ZineHomePageContainer = ({ load, user, zine }) =>
  createUI({
    name: 'zine-home-page',
    load
  })(() => <ZineHomePage  user={user} zine={zine} />)

const mapStateToProps = (state, { match: { params } }) => ({
  zine: state.get('zines').find(zine => zine.name === params.zineName),
  user: state.get('users').find(user => user.id === state.getIn(['me','userId']))
})

const mapDispatchToProps = (dispatch, { match: { params } }) => ({
  load: async () => {
    await dispatch(fetchZine({ name: params.zineName, deleted: false }))
  }
})

 export default connect(mapStateToProps, mapDispatchToProps)(ZineHomePageContainer)
