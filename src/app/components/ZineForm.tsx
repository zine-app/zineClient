import React from 'react'
import DropzoneField from 'app/components/DropzoneField'
import { Field } from 'redux-form/immutable'
import Toggle from 'react-toggle'
import 'app/styles/toggle'
import 'app/styles/zineIcon'
import PlusIcon from 'app/icons/plus'
import { isArray } from 'lodash'
import * as validate from 'app/utils/validate'

const controlRenderers = {
  text: ({ input, type, placeholder, meta }) =>
    <input
      className={`control--field${meta.touched && meta.error && '__error'}`}
      {...input} type={type}
      placeholder={placeholder}
    />,

  toggle: ({ defaultChecked = false }) =>
    <Toggle defaultChecked={defaultChecked} />,

  image: props =>
    <DropzoneField {...props} />
}

const control = props =>
  <div className="card--list-item">
    <div className="control--field-group">
      <label>{props.label}</label>
      { controlRenderers[props.type] && controlRenderers[props.type](props) }
    </div>
    {
      props.meta.touched && props.meta.error &&
        <div className="control--error">
        {props.meta.error}
        </div>
    }
  </div>

const IconPlaceholder = () =>
  <div className="zine-icon">
    <PlusIcon />
  </div>

const formatIcon = (input) =>
  isArray(input) ?
    input.map(({ preview }, index) =>
      <div
        key={index}
        style={{ backgroundImage: `url("${preview}")` }}
        className="zine-icon"
      >
      </div>
    ):
    input ?
      <div className="zine-icon">
        src: { input }
      </div>:
      null


export default props =>
  <form>
    <Field
      name="name" component={control} label="name"
      type="text" placeholder="Doodels"
      validate={[
        validate.required, validate.name,
        validate.maxLength(25), validate.minLength(1)
      ]}
    />
    <Field
      name="description" component={control} label="description"
      type="text" placeholder="Daily Doodles by Alex"
      validate={[
        validate.maxLength(50), validate.minLength(0)
      ]}
    />
    <Field
      name="categories" component={control} label="categories (comma seperated)"
      type="text" placeholder="art, drawing, doodles"
      validate={[ validate.commaSeperatedString, validate.maxLength(2000) ]}
    />
    <Field
      name="icon" component={control} type="image" label="icon"
      format={formatIcon}
      placeholder={IconPlaceholder()}
    />
    <Field
      name="published" component={control} type="toggle" label="published"
    />
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
    {
      props.error && <div className="control--error">{props.error}</div>
    }
  </form>
