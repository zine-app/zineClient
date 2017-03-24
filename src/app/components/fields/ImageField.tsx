import React from 'react'
import { Field, SubmissionError } from 'redux-form/immutable'
import Dropzone from 'react-dropzone'
import 'app/styles/control'
import { isArray } from 'lodash'
import PlusIcon from 'app/icons/plus'

interface IImageFieldProps {
  name:string
  label?:string
  validate?:Array<any>
}


const Preview = ({ url }) =>
  <div
    className="control--image"
    style={{
      backgroundImage: url ? `url('${url}')` : 'none'
    }}
  >
    <div style={{
      paddingTop: '60%'
    }}></div>
  {
    url ?
      null :
      <div
        style={{
          position: 'absolute',
          height: '3em',
          width: '3em',
        }}
      >
        <PlusIcon />
      </div>
  }
  </div>

export default ({ label, name, validate }:IImageFieldProps) =>
  <Field
    validate={validate}
    name={name}
    component={({ input, name , meta: { pristine, touched, dirty, invalid, error} }) =>
      <div className="control--text">
          { label && <label>{label}</label> }
          <Dropzone
            multiple={false}
            minSize={200}
            accept="image/jpeg"
            style={{}}
            name={name}
            onDropAccepted={acceptedFiles => input.onChange(acceptedFiles)}
          >
            {
              error ?
                <Preview url="" />:
                isArray(input.value) ?
                  input.value.map(({ preview }, index) =>
                    <Preview url={preview} key={index} />):
                  <Preview url={input.value} />
            }
          </Dropzone>
        {
          dirty && invalid &&
            <div className="control--error">
            { error }
            </div>
        }
      </div>
    }
  />
