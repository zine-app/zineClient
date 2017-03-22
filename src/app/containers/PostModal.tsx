import * as React from 'react'
import { connect } from 'react-redux'
import PostModal from 'app/components/PostModal'
import hidePostModal from 'app/actions/UI/postModal/hidePostModal'
import showImageModal from 'app/actions/UI/imageModal/showImageModal'

const mapDispatchToProps = dispatch => ({
  hidePostModal: options => dispatch(hidePostModal(options)),
  showImageModal: options => dispatch(showImageModal(options))
})

const mapStateToProps = state => ({
  shouldDisplay: state.getIn(['ui', 'postModal', 'shouldDisplay']),
  transition: state.getIn(['ui', 'postModal', 'transition'])
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
