import * as React from 'react'
import { connect } from 'react-redux'
import WebFont from 'webfontloader'
import App from 'app/components/App'
import Bundle from 'app/containers/Bundle'
import fetchMe from 'app/actions/user/fetchMe'
import fetchMyZines from 'app/actions/zine/fetchMyZines'
import { load as loadFacebookSDK } from 'app/utils/facebook'
import ErrorPage from 'app/components/ErrorPage'
import AppLoader from 'app/components/AppLoader'


const AppContainer =  ({ appLoader }) =>
  <Bundle
    load={appLoader}
    loading={() => <AppLoader shouldDisplay={true} />}
    success={() => <App />}
    error={(error) => <ErrorPage />}
  />

const mapDispatchToProps = dispatch => ({
  appLoader: async () => {
    WebFont.load({ google: { families: ['Caveat'] } })
    await loadFacebookSDK()
    const me = await dispatch(fetchMe())
    me.payload.name && await dispatch(fetchMyZines({ deleted: false }))
  }
})

export default connect(undefined, mapDispatchToProps)(AppContainer)
