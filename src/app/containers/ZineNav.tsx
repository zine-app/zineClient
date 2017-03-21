import * as React from 'react'
import { connect } from 'react-redux'
import ZineNav from 'app/components/ZineNav'
import togglePostModal from 'app/actions/ui/postModal/togglePostModal'

const mapDispatchToProps = dispatch => ({
  togglePostModal: () => dispatch(togglePostModal())
})

export default connect(undefined, mapDispatchToProps)(ZineNav)
