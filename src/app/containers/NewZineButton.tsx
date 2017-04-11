import * as React from 'react'
import { connect } from 'react-redux'
import NewZineButton from 'app/components/NewZineButton'
import toggleModal from 'app/actions/UI/modal/toggleModal'

const UserProfileButtonContainer = ({ src, toggleSlideout, disabled }) =>
  <NewZineButton onClick={toggleSlideout} disabled={disabled} />

const mapDispatchToProps = dispatch => ({
  toggleSlideout: () => dispatch(toggleModal({ name: 'createNewChannel', theme: 'white' }))
})

const mapStateToProps = state => ({
  disabled: state.get('zines').size >= 10
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileButtonContainer)
