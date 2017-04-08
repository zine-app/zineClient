import React from 'react'
import { Field } from 'redux-form/immutable'
import 'app/styles/control'

interface ITextFieldProps extends React.Props<any> {
  name:string
  label?:string
  placeholder?:string
  validate?:Array<any>
  className?:string
  autoFocus?:boolean
}

const renderComponent = ({
  input,
  placeholder,
  label,
  autoFocus,
  className = 'control--text',
  meta: { touched, dirty, invalid, error}
}) =>
  <div className={className}>
      { label && <label>{label}</label> }
      <input
        autoFocus={autoFocus}
        className={`${className}${touched && error ? '__error' : ''}`}
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

export default ({ name, validate, placeholder = '', label = '', className = '', autoFocus = false }:ITextFieldProps) =>
  <Field
    placeholder={placeholder}
    label={label}
    validate={validate}
    name={name}
    component={renderComponent}
    className={className}
    autoFocus={autoFocus}
  />
