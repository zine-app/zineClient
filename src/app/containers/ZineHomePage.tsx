import * as React from 'react'
import { connect } from 'react-redux'
import ZineHomePage from 'app/components/ZineHomePage'
import Bundle from 'app/containers/Bundle'
import ErrorPage from 'app/components/ErrorPage'
import AppLoader from 'app/components/AppLoader'
import fetchZine from 'app/actions/zine/fetchZine'

const ZineHomePageContainer = ({ zineHomePageLoader, user, zine }) =>
  <Bundle
    load={zineHomePageLoader}
    loading={() => <AppLoader shouldDisplay={true} />}
    success={() => <ZineHomePage user={user} zine={zine} />}
    error={(error) => <ErrorPage />}
  />

const mapStateToProps = (state, { match: { params } }) => ({
  zine: state.get('zines').find(zine => zine.name === params.zineName),
  user: state.get('user'),
})

const mapDispatchToProps = (dispatch, { match: { params } }) => ({
  zineHomePageLoader: async () => {
    await dispatch(fetchZine({ name: params.zineName, deleted: false }))
  }
})

 export default connect(mapStateToProps, mapDispatchToProps)(ZineHomePageContainer)
