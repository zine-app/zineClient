import React from 'react'
import { connect } from 'react-redux'
import ZineForm from 'app/components/ZineForm'
import { reduxForm, SubmissionError } from 'redux-form/immutable'
import uploadImage from 'app/webAPI/image'
import saveZine from '../actions/zine/saveZine'
import setZineForm from '../actions/UI/zineForm/setZineForm'


const mapStateToProps = state => ({
  initialValues: state
    .get('zines')
    .find(zine => zine.name === state.getIn(['ui', 'zineForm', 'currentZine']))
})

const mapDispatchToProps = (dispatch) => ({
  save: zine => dispatch(saveZine(zine))
    .then(action => {
      if(action.error) throw new SubmissionError({ _error: action.meta.message })

      dispatch(setZineForm({ currentZine: zine.name }))
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'zine',
  enableReinitialize: true
})(ZineForm))
