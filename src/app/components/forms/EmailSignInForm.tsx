import * as React from 'react'
import Divider from 'app/components/Divider'
import TextField from 'app/components/fields/TextField'
import PasswordField from 'app/components/fields/PasswordField'
import 'app/styles/control'
import * as validate from 'app/utils/validate'

export default ({ signUp, handleSubmit }) =>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div>signin/signup with email</div>
    <Divider height="3rem" />
    <label htmlFor="email" className="control--label__large">email</label>
    <TextField
      name="email"
      className="control--field__large"
      placeholder="example@zine.media"
      validate={[
        validate.required,
        validate.email
      ]}
    />
    <Divider height="2rem" />
    <label htmlFor="password" className="control--label__large">password</label>
    <PasswordField
      name="password"
      className="control--field__large"
      placeholder="password"
      validate={[
        validate.required,
        validate.maxLength(50),
        validate.minLength(5)
      ]}
    />
    <Divider height="1rem" />
    <button style={{ display: 'flex', color: 'rgb(90, 150, 210)' }}>forgot password?</button>
    <Divider height="3rem" />
    <p style={{ color: 'rgb(120,120,120)' }}>signin to your account</p>
    <Divider height="0.8rem" />
    <button onClick={handleSubmit(signUp)} className="control--button__blue__large">signin/signup</button>
  </div>
