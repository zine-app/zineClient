import React from 'react'
import { Field } from 'redux-form/immutable'

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning, asyncValidating } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      { asyncValidating && <span>validating</span> }
    </div>
  </div>
)

export default props =>
  <div>
      <Field
        name="name"
        label="name"
        component={renderField}
        type="text"
        placeholder="name"
        validate={[ required, maxLength(15), minLength(1) ]}
      />
      <button onClick={props.handleSubmit(user => props.saveUser(user.toJSON()))}>save</button>
  </div>
