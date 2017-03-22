import React from 'react'
import { Field } from 'redux-form/immutable'
import 'app/styles/control'

interface ITextFieldProps {
  name:string
  label?:string
  placeholder?:string
}

export default ({ name, label, placeholder }:ITextFieldProps) =>
  <Field
    name={name}
    component={({ input, meta: { touched, dirty, invalid, error} }) =>
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
    }
  />
