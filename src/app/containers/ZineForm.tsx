import React from 'react'
import { connect } from 'react-redux'
import ZineForm from 'app/components/ZineForm'
import { reduxForm, SubmissionError } from 'redux-form/immutable'
import uploadImage from 'app/webAPI/image'
import saveZine from 'app/actions/zine/saveZine'
import setZineForm from 'app/actions/UI/zineForm/setZineForm'
import { requestGetZine } from 'app/webAPI/zine'
import { createZine } from 'app/constants/Zine'


const mapStateToProps = state => ({
  initialValues: state
    .get('zines')
    .find(zine => zine.name === state.getIn(['ui', 'zineForm', 'currentZine'])) ||
    createZine({
      ownerId: state.getIn(['user', 'id'])
    })
})

const mapDispatchToProps = (dispatch) => ({
  save: zine => dispatch(saveZine(zine))
    .then(action => {
      if(action.error) throw new SubmissionError({ _error: action.meta.message })

      dispatch(setZineForm({ currentZine: zine.name }))
    })
})

const asyncValidate = zine =>
  requestGetZine({ name: zine.name })
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
