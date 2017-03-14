import React from 'react'
import DropzoneField from 'app/components/DropzoneField'
import { Field } from 'redux-form/immutable'
import Toggle from 'react-toggle'
import 'app/styles/toggle'
import 'app/styles/zineIcon'
import PlusIcon from 'app/icons/plus'
import { isArray } from 'lodash'

const controlRenderers = {
  text: ({ input, type, placeholder }) =>
    <input className="control--field" {...input} type={type} placeholder={placeholder} />,

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
  </div>

const IconPlaceholder = () =>
  <div className="zine-icon">
    <PlusIcon />
  </div>

const formatIcon = (input) =>
  isArray(input) ?
    input.map(({ file, preview }, index) =>
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

export default () =>
  <form>
    <Field
      name="name" component={control} label="name"
      type="text" placeholder="Doodels"
    />
    <Field
      name="description" component={control} label="description"
      type="text" placeholder="Daily Doodles by Alex"
    />
    <Field
      name="categories" component={control} label="categories"
      type="text" placeholder="art, drawing, doodles"
    />
    <Field
      name="icon" component={control} type="image" label="icon"
      format={formatIcon}
      placeholder={IconPlaceholder()}
    />
    <Field
      name="published" component={control} type="toggle" label="published"
    />
    <button className="control--button__blue">save</button>
  </form>
