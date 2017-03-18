import * as React from 'react'
import { connect } from 'react-redux'
import Slideout from 'app/components/Slideout'
import closeSlideout from 'app/actions/UI/slideout/closeSlideout'

const mapStateToProps = state => ({
  isOpen: state.getIn(['ui','slideout','isOpen']),
  cardName: state.getIn(['ui','slideout','cardName'])
})

const mapDispatchToProps = dispatch => ({
  closeSlideout: () => dispatch(closeSlideout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Slideout)
