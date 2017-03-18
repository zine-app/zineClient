import * as React from 'react'
import { connect } from 'react-redux'
import ZineEditorTools from 'app/components/sidebar/groups/ZineEditorTools'
import toggleSlideout from 'app/actions/UI/slideout/toggleSlideout'


const mapDispatchToProps = (dispatch, { zine: { id } }) => ({
  toggleSettingsCard: () => dispatch(toggleSlideout({ withCard: 'zine' }))
})

export default connect(undefined, mapDispatchToProps)(ZineEditorTools)
