import * as React from 'react'
import { connect } from 'react-redux'
import AppLoader from 'app/components/AppLoader'


const mapStateToProps = (state):AppLoaderProps => ({
  shouldDisplay: state.getIn(['ui', 'appLoader', 'shouldDisplay']),
  color: state.getIn(['ui', 'appLoader', 'color'])
})

export default connect(mapStateToProps)(AppLoader)
