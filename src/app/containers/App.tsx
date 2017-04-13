import * as React from 'react'
import { connect } from 'react-redux'
import WebFont from 'webfontloader'
import App from 'app/components/App'
import fetchMe from 'app/actions/user/fetchMe'
import fetchMyZines from 'app/actions/zine/fetchMyZines'
import fetchZine from 'app/actions/zine/fetchZine'
import { load as loadFacebookSDK } from 'app/utils/facebook'
import ErrorPage from 'app/components/pages/ErrorPage'
import AppLoader from 'app/components/AppLoader'
import getMyUser from 'app/selectors/me/getMyUser'


interface IProps extends React.Props<any> {
  user: any
  zine: any
  load: () => Promise<void>
  match: any
}

class AppContainer extends React.Component<IProps, any> {
  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  componentWillMount () {
    this.props.load()
      .then(() =>
        this.setState(state => ({
          loading: false
        })))
  }

  componentWillReceiveProps (props) {
    this.props.match !== props.match && props.load()
  }

  render () {
    return <App {...this.props} loading={this.state.loading} />
  }
}


const mapDispatchToProps = (dispatch, { match: { params: { zineName } } }) => ({
  load: async () => {
    WebFont.load({ google: { families: ['Caveat'] } })

    await loadFacebookSDK()

    // Fetch Me
    const me = await dispatch(fetchMe())
    // Fetch my zines
    if(me.payload.name) {
      await dispatch(fetchMyZines({ deleted: false }))
    }

    // Fetch zine
    if(zineName) {
      await dispatch(fetchZine({ deleted: false, name: zineName }))
    }
  }
})

const mapStateToProps = (state, { match: { params: { zineName } }}) => ({
  user: getMyUser(state),
  zine: zineName ?
    state.get('zines').find(zine => zine.name === zineName) :
    null
})


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
