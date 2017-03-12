import * as React from 'react'
import { connect } from 'react-redux'
import Slideout from 'app/components/Slideout'

const mapStateToProps = state => ({
  isOpen: state.getIn(['ui','slideout','isOpen']),
  cardName: state.getIn(['ui','slideout','cardName'])
})

export default connect(mapStateToProps)(Slideout)
