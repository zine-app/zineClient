import * as React from 'react'
import { connect } from 'react-redux'
import UserProfileButton from 'app/components/UserProfileButton'

const UserProfileButtonContainer = ({ src }) =>
  <UserProfileButton src={src} />

const mapStateToProps = state => ({
  src: state.getIn(['user', 'profileImageURL'])
})

export default connect(mapStateToProps)(UserProfileButtonContainer)
