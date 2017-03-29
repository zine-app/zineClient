import * as React from 'react'
import { connect } from 'react-redux'
import ZineHomePage from 'app/components/ZineHomePage'
import ErrorPage from 'app/components/ErrorPage'
import AppLoader from 'app/components/AppLoader'
import fetchZine from 'app/actions/zine/fetchZine'
import createUI from 'app/containers/UI'
import getPostsForZine from 'app/selectors/post/getPostsForZine'
import fetchPosts from 'app/actions/post/fetchPosts'

interface IProps extends React.Props<any> {
  zine: any
  user: any
  posts: any
  load: () => void
}

class ZineHomePageContainer extends React.Component<IProps, any> {
  componentWillMount () {
    this.props.load()
  }

  componentWillReceiveProps (props) {
    this.props !== props && props.load()
  }

  render () {
    return <ZineHomePage {...this.props} />
  }
}

const mapStateToProps = (state, { match: { params } }) => ({
  zine: state.get('zines').find(zine => zine.name === params.zineName),
  user: state.get('users').find(user => user.id === state.getIn(['me','userId'])),
  posts: getPostsForZine(state, { zine: state.get('zines').find(zine => zine.name === params.zineName) })
})

const mapDispatchToProps = (dispatch, { match: { params } }) => ({
  load: async () => {
    dispatch(fetchZine({ name: params.zineName, deleted: false }))
    dispatch((dispatch, getState) =>
      dispatch(fetchPosts({
        zineId: getState()
          .get('zines')
          .find(zine => zine.name === params.zineName).id
      })))
  }
})

 export default connect(mapStateToProps, mapDispatchToProps)(ZineHomePageContainer)
