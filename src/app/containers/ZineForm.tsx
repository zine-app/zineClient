import React from 'react'
import { connect } from 'react-redux'
import ZineForm from 'app/components/ZineForm'
import { reduxForm } from 'redux-form/immutable'
import uploadImage from 'app/webAPI/image'


const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'zine',
  enableReinitialize: true
})(ZineForm))
