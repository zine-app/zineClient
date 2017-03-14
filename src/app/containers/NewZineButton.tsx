import * as React from 'react'
import { connect } from 'react-redux'
import NewZineButton from 'app/components/NewZineButton'
import toggleSlideout from 'app/actions/UI/slideout/toggleSlideout'

const UserProfileButtonContainer = ({ src, toggleSlideout }) =>
  <NewZineButton onClick={toggleSlideout} />

const mapDispatchToProps = dispatch => ({
  toggleSlideout: () => dispatch(toggleSlideout({ withCard: 'zine' }))
})

export default connect(undefined, mapDispatchToProps)(UserProfileButtonContainer)
