import * as React from 'react'
import { connect } from 'react-redux'
import ImageModal from 'app/components/ImageModal'
import hideImageModal from 'app/actions/UI/imageModal/hideImageModal'

const mapDispatchToProps = dispatch => ({
  hideImageModal: () => dispatch(hideImageModal()),
})

const mapStateToProps = state => ({
  shouldDisplay: state.getIn(['ui', 'imageModal', 'shouldDisplay'])
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal)
