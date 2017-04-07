import * as React from 'react'
import { connect } from 'react-redux'
import Modal from 'app/components/Modal/Modal'
import hideModal from 'app/actions/UI/Modal/hideModal'
import showModal from 'app/actions/UI/Modal/showModal'

const mapDispatchToProps = dispatch => ({
  hide: options => dispatch(hideModal(options)),
  show: options => dispatch(showModal(options))
})

const mapStateToProps = state => state.getIn(['ui','modal']).toObject()


export default connect(mapStateToProps, mapDispatchToProps)(Modal)
