import * as React from 'react'
import { connect } from 'react-redux'
import OwnZines from 'app/components/sidebar/groups/OwnZines'

const mapStateToProps = state => ({
  zines: state.get('zines')
})

export default connect(mapStateToProps)(OwnZines)
