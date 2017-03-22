import * as React from 'react'
import { connect } from 'react-redux'
import PostModal from 'app/components/PostModal'
import hidePostModal from 'app/actions/UI/postModal/hidePostModal'
import showImageModal from 'app/actions/UI/imageModal/showImageModal'

const mapDispatchToProps = dispatch => ({
  hidePostModal: () => dispatch(hidePostModal()),
  showImageModal: () => dispatch(showImageModal())
})

const mapStateToProps = state => ({
  shouldDisplay: state.getIn(['ui', 'postModal', 'shouldDisplay'])
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
