import React from 'react'
import DropzoneField from 'app/components/DropzoneField'
import { Field } from 'redux-form/immutable'
import Toggle from 'react-toggle'
import 'app/styles/toggle'
import 'app/styles/zineIcon'
import PlusIcon from 'app/icons/plus'
import { isArray } from 'lodash'
import * as validate from 'app/utils/validate'
import { debounce } from 'lodash'
import ConfirmButton from 'app/containers/ConfirmButton'
import ImageField from 'app/components/fields/ImageField'


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
      props.meta.dirty && props.meta.invalid &&
        <div className="control--error">
        {props.meta.error}
        </div>
    }
  </div>

const IconPlaceholder = () =>
  <div className="zine-icon__medium">
    <PlusIcon />
  </div>

const IconPreview = ({ url }) =>
  <div
    style={{ backgroundImage: `url("${url}")` }}
    className="zine-icon__medium"
  ></div>





export default props => {
  const debouncedAsyncValidate = debounce(props.asyncValidate, 600)

  return (
    <div>
      <Field
        name="name" component={control} label="name"
        type="text" placeholder="Doodels"
        validate={[
          validate.required, validate.name,
          validate.maxLength(25), validate.minLength(1)
        ]}
        onChange={() => { debouncedAsyncValidate() }}
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
      <div className="card--list-item">
        <ImageField name="iconImageURL"
          renderPreview={(url, key) => <IconPreview url={url} key={key} />}
          renderPlaceholder={() => <IconPlaceholder />}
          validate={[
            validate.maxFileSize(4000000),
          ]}
        />
      </div>
      <div className="card--list-item">
        <ImageField name="headerImageURL"
          validate={[
            validate.maxFileSize(4000000),
          ]}
        />
      </div>
      <Field
        name="published" component={control} type="toggle" label="published"
      />

      <div className="card--list-item">
        <div className="control--field-group">
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
      </div>
    {
      props.initialValues.id &&
      <div className="card--list-item" style={{ marginTop: '2rem' }}>
        <div className="control--field-group">
          <Field
            name="deleted"
            component={field => {
              return (
                <ConfirmButton
                  message="are you sure you want to delete this zine?"
                  className="control--button"
                  onConfirm={() => {
                    props.handleSubmit(zine => props.delete(zine.toJSON()))()
                  }}
                  onReject={() => {  }}
                >
                delete
                </ConfirmButton>
              )
            }}
          />
        </div>
      </div>

    }

    {
      props.error && <div className="control--error">{props.error}</div>
    }
    </div>
  )
}
