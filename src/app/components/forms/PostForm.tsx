import * as React from 'react'
import { Field } from 'redux-form/immutable'
import TextField from 'app/components/fields/TextField'
import * as validate from 'app/utils/validate'
import PostEditor from 'app/containers/PostEditor'


export default props =>
  <div>
    <TextField placeholder="title" name="title"
      validate={[
        validate.maxLength(50),
        validate.minLength(0)
      ]}
    />
    <div>
      <Field
        name="body"
        component={({ input }) =>
          <PostEditor onChange={input.onChange} />
        }
      />
    </div>
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
