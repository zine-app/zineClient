import React from 'react'
import { connect } from 'react-redux'
import UserProfile from 'app/components/UserProfile'

const UserProfileContainer = props => <UserProfile {...props} />

const mapStateToProps = state => state.get('user').toJSON()

export default connect(mapStateToProps)(UserProfileContainer)
