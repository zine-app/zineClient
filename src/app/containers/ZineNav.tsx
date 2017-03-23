import * as React from 'react'
import { connect } from 'react-redux'
import ZineNav from 'app/components/ZineNav'
import toggleModal from 'app/actions/ui/Modal/toggleModal'

const mapDispatchToProps = dispatch => ({
  toggleModal: () =>
    dispatch(toggleModal({ transition: 'fadein' }))
})

export default connect(undefined, mapDispatchToProps)(ZineNav)
