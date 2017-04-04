import * as React from 'react'
import { connect } from 'react-redux'
import ZineNav from 'app/components/ZineNav'
import toggleModal from 'app/actions/ui/Modal/toggleModal'

const mapDispatchToProps = (dispatch, { zine }) => ({
  toggleModal: () =>
    dispatch(toggleModal({
      theme: 'white',
      transition: 'fadein',
      name: 'Post',
      props: { zine: zine }
    }))
})

export default connect(undefined, mapDispatchToProps)(ZineNav)
