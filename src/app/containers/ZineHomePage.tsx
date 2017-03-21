import * as React from 'react'
import { connect } from 'react-redux'
import ZineHomePage from 'app/components/ZineHomePage'
import IndexRouteHandler from 'app/containers/IndexRouteHandler'


const mapStateToProps = (state, { match: { params } }) => ({
  zine: state.get('zines').find(zine => zine.name === params.zineName),
  user: state.get('user')
})

const ConnectedZineHomePage = connect(mapStateToProps)(ZineHomePage)

export default props =>
  <IndexRouteHandler>
    <ConnectedZineHomePage {...props} />
  </IndexRouteHandler>
