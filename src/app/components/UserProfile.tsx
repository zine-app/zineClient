import React from 'react'
import { Field } from 'redux-form/immutable'
import Dropzone from 'react-dropzone'
import ProfileImage from 'app/components/ProfileImage'
import DropzoneField from 'app/components/DropzoneField'
import 'app/styles/control'
import 'app/styles/userProfile'
import { isArray } from 'lodash'

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning, asyncValidating } }) => (
  <div>
    <input {...input} placeholder={label} type={type} className="control--field"/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

const ProfileImagePlaceholder = () => <ProfileImage src="" />

const formatProfileImage = (input) =>
  isArray(input) ?
    input.map(({ preview }, index) =>
      <ProfileImage src={preview} key={index} />
    ) :
    input ?
        <ProfileImage src={input} /> :
      null


export default props =>
  <form>
    <div className='user-profile--list-item'>
      <div className='control--field-group'>
        <label>name</label>
        <Field
          name="name"
          label="name"
          component={renderField}
          type="text"
          placeholder="name"
          validate={[ required, maxLength(25), minLength(1) ]}
        />
      </div>
    </div>
    <div className='user-profile--list-item'>
      <div className='control--field-group'>
        <label>profile picture</label>
        <Field
          name="profileImageURL" component={DropzoneField}
          format={formatProfileImage}
          placeholder={ProfileImagePlaceholder()}
        />
      </div>
    </div>
    <div className='user-profile--list-item'>
      <button
        className="control--button__blue"
        disabled={props.pristine || props.invalid}
        onClick={props.handleSubmit(user => props.saveUser(user.toJSON()))}
      >
          {
            props.submitting ?  'saving...' :
              (props.pristine && props.submitSucceeded) ?
                'saved' :
                'save'
          }
      </button>
    </div>
  </form>
