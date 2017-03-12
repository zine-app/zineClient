import * as React from 'react'
import { connect } from 'react-redux'
import UserProfileButton from 'app/components/UserProfileButton'
import toggleSlideout from 'app/actions/UI/slideout/toggleSlideout'

const UserProfileButtonContainer = ({ src, toggleSlideout }) =>
  <UserProfileButton src={src}  onClick={toggleSlideout} />

const mapStateToProps = state => ({
  src: state.getIn(['user', 'profileImageURL'])
})

const mapDispatchToProps = dispatch => ({
  toggleSlideout: () => dispatch(toggleSlideout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileButtonContainer)
