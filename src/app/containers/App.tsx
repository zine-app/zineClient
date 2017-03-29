import * as React from 'react'
import { connect } from 'react-redux'
import WebFont from 'webfontloader'
import App from 'app/components/App'
import fetchMe from 'app/actions/user/fetchMe'
import fetchMyZines from 'app/actions/zine/fetchMyZines'
import { load as loadFacebookSDK } from 'app/utils/facebook'
import ErrorPage from 'app/components/ErrorPage'
import AppLoader from 'app/components/AppLoader'
import createUI from 'app/containers/UI'
import getMyUser from 'app/selectors/me/getMyUser'



const AppContainer = ({ load, me }) =>
  createUI({
    name: 'app',
    load,
    props: { me }
  })(App)


const load = async dispatch => {
  WebFont.load({ google: { families: ['Caveat'] } })
  await loadFacebookSDK()
  const me = await dispatch(fetchMe())
  me.payload.name && await dispatch(fetchMyZines({ deleted: false }))
}

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(load)
})

const mapStateToProps = state => ({
  me: getMyUser(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
