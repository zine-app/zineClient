import * as React from 'react'
import { connect } from 'react-redux'
import ZineHomePage from 'app/components/ZineHomePage'


const mapStateToProps = (state, { match: { params } }) => ({
  zine: state.get('zines').find(zine => zine.name === params.zineName),
  user: state.get('user'),
})

export default connect(mapStateToProps)(ZineHomePage)
