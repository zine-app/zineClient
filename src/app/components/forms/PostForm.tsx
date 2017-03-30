import * as React from 'react'
import TextField from 'app/components/fields/TextField'
import * as validate from 'app/utils/validate'


export default props =>
  <div>
    <TextField placeholder="title" name="title"
      validate={[
        validate.maxLength(50),
        validate.minLength(0)
      ]}
    />
    <button
      className="control--button__blue"
      disabled={props.pristine || props.invalid}
      onClick={props.handleSubmit(post => props.save(post.toJSON()))}
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
