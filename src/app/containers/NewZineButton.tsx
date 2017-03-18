import * as React from 'react'
import { connect } from 'react-redux'
import NewZineButton from 'app/components/NewZineButton'
import toggleSlideout from 'app/actions/UI/slideout/toggleSlideout'
import setZineForm from 'app/actions/UI/zineForm/setZineForm'

const UserProfileButtonContainer = ({ src, toggleSlideout, disabled }) =>
  <NewZineButton onClick={toggleSlideout} disabled={disabled} />

const mapDispatchToProps = dispatch => ({
  toggleSlideout: () => dispatch((dispatch) => {
    dispatch(setZineForm({ currentZine: '' }))
    dispatch(toggleSlideout({ withCard: 'newZine' }))
  })
})

const mapStateToProps = state => ({
  disabled: state.get('zines').size >= 10
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileButtonContainer)
