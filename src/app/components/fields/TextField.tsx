import React from 'react'
import { Field } from 'redux-form/immutable'
import 'app/styles/control'

interface ITextFieldProps extends React.Props<any> {
  name:string
  label?:string
  placeholder?:string
  validate?:Array<any>
}

const renderComponent = ({ input, placeholder, label, meta: { touched, dirty, invalid, error} }) => {

  return (
    <div className="control--text">
        { label && <label>{label}</label> }
        <input
          className={`control--field${touched && error && '__error'}`}
          {...input} type="text"
          placeholder={placeholder}
        />
      {
        dirty && invalid &&
          <div className="control--error">
          { error }
          </div>
      }
    </div>
  )
}

export default ({ name, validate, placeholder, label }) =>
  <Field
    placeholder={placeholder}
    label={label}
    validate={validate}
    name={name}
    component={renderComponent}
  />
