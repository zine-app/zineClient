import React from 'react'
import { connect } from 'react-redux'
import ZineForm from 'app/components/ZineForm'
import { reduxForm, SubmissionError } from 'redux-form/immutable'
import uploadImage from 'app/webAPI/image'
import saveZine from 'app/actions/zine/saveZine'
import deleteZine from 'app/actions/zine/deleteZine'
import setZineForm from 'app/actions/UI/zineForm/setZineForm'
import { requestGetZine } from 'app/webAPI/zine'
import { createZine } from 'app/constants/Zine'
import { replace } from 'react-router-redux'


const mapStateToProps = (state, props) => ({
  initialValues: props.zine || createZine({ ownerId: state.getIn(['user', 'id'])})
})

const mapDispatchToProps = (dispatch) => ({
  save: zine => dispatch((dispatch, getState) => {
    const oldZine = getState().get('zines').find(_zine => _zine.id === zine.id)

    dispatch(saveZine(zine))
      .then(action => {
        if(action.error) throw new SubmissionError({ _error: action.meta.message })

        dispatch(setZineForm({ currentZine: action.payload.id }))
        if(oldZine && oldZine.name !== zine.name) dispatch(replace(`/${zine.name}`))
      })
    }
  ),

  delete: zine => dispatch(deleteZine(zine))
})

const asyncValidate = zine =>
  requestGetZine({ name: zine.name.trim() })
    .then(response => {
      if(
        response.status === 200 &&
        response.body.id !== zine.id
      ) {
        if(response.body.ownerId === zine.ownerId) {
          throw { name: `you already own a zine named ${zine.name}` }
        } else {
          throw { name: `this zine name is already taken` }
        }
      }
    })

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'zine',
  enableReinitialize: true,
  asyncValidate,
  asyncBlurFields: ['name']
})(ZineForm))
