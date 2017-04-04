import * as React from 'react'
import { connect } from 'react-redux'
import OwnZines from 'app/components/sidebar/groups/OwnZines'
import getMyUser from 'app/selectors/me/getMyUser'

const mapStateToProps = state => ({
  zines: state.get('zines')
    .filter(zine => !zine.deleted)
    .filter(zine => zine.ownerId === getMyUser(state).id)
})

export default connect(mapStateToProps)(OwnZines)
