import * as React from 'react'
import { connect } from 'react-redux'
import ZineHomePage from 'app/components/ZineHomePage'
import ErrorPage from 'app/components/ErrorPage'
import AppLoader from 'app/components/AppLoader'
import fetchZine from 'app/actions/zine/fetchZine'
import getPostsForZine from 'app/selectors/post/getPostsForZine'
import fetchPosts from 'app/actions/post/fetchPosts'
import fetchUsers from 'app/actions/user/fetchUsers'
import { uniq } from 'lodash'


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
    const fetchPostResponse = await dispatch((dispatch, getState) =>
      dispatch(fetchPosts({
        zineId: getState()
          .get('zines')
          .find(zine => zine.name === params.zineName).id
      })))

    const authorIds = uniq(fetchPostResponse.payload.map(post => post.authorId))

    dispatch(fetchUsers({ _id: authorIds.length > 1 ? authorIds : authorIds[0] }))
  }
})

 export default connect(mapStateToProps, mapDispatchToProps)(ZineHomePageContainer)
