import * as React from 'react'
import { connect } from 'react-redux'
import ZineHomePage from 'app/components/ZineHomePage'

const mapStateToProps = (state, props) => ({
  zine: state.get('zines').find(zine => zine.name === props.params.zineName),
  user: state.get('user')
})


export default connect(mapStateToProps)(ZineHomePage)
