import React from 'react'
import DropzoneField from 'app/components/DropzoneField'
import TextField from 'app/components/fields/TextField'
import ImageField from 'app/components/fields/ImageField'
import * as validate from 'app/utils/validate'


export default (props) =>
  <div>
    <TextField placeholder="title" name="title"
      validate={[
        validate.maxLength(10),
        validate.minLength(0)
      ]}
    />
    <div style={{ height: '1rem' }} />
    <ImageField name="image" />
    <div style={{ height: '1rem' }} />
    <TextField placeholder="description" name="description" />
    <div style={{ height: '1rem' }} />
    <TextField placeholder="tags" name="tags(comma seperated)" />
    <div style={{ height: '2rem' }} />
    <button
      className="control--button__blue"
      disabled={props.pristine || props.invalid}
      onClick={props.handleSubmit(zine => props.save(zine.toJSON()))}
    >
    {
      props.submitting ?
      'saving...' :
      (props.pristine && props.submitSucceeded) ?
      'saved' :
      'save'
    }
    </button>
  </div>
