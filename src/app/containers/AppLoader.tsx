import * as React from 'react'
import { connect } from 'react-redux'
import AppLoader, { AppLoaderProps } from 'app/components/AppLoader'


const mapStateToProps = (state):AppLoaderProps => ({
  shouldDisplay: state.getIn(['ui', 'appLoader', 'shouldDisplay'])
})

export default connect(mapStateToProps)(AppLoader)
