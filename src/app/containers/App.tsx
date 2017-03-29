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


interface IProps extends React.Props<any> {
  me: any
  load: () => void
}

class AppContainer extends React.Component<IProps, any> {
  componentWillMount () {
    this.props.load()
  }

  componentWillReceiveProps (props) {
    this.props !== props && props.load()
  }

  render () {
    return <App {...this.props} loading={false} />
  }
}

const load = async dispatch => {
  WebFont.load({ google: { families: ['Caveat'] } })
  await loadFacebookSDK()
  const me = await dispatch(fetchMe())
  me.payload.name && await dispatch(fetchMyZines({ deleted: false }))
}

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(load)
})

const mapStateToProps = state => {
  console.log('USER', getMyUser(state))
  return ({
    me: getMyUser(state)
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
