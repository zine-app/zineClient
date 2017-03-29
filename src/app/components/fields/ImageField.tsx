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
  renderPlaceholder?:() => any
  renderPreview?:(url:string, key?:number) => any
}

const DefaultPlaceholder = () =>
  <div
    style={{
      position: 'relative',
      backgroundColor: 'rgb(240,240,240)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      curosor: 'pointer'
    }}
  >
    <div style={{ paddingTop: '70%' }}></div>
    <div
      style={{
        position: 'absolute',
        height: '3em',
        width: '3em',
      }}
    >
      <PlusIcon />
    </div>
  </div>


const DefaultPreview = ({ url }) =>
  <div
    style={{
      backgroundImage: `url('${url}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      curosor: 'pointer'
    }}
  >
    <div style={{ paddingTop: '70%' }}></div>
  </div>



export default ({
  label,
  name,
  validate,
  renderPreview = (url, key=0) => <DefaultPreview url={url} key={key} />,
  renderPlaceholder = () => <DefaultPlaceholder />
}:IImageFieldProps) =>
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
                renderPlaceholder() :
                isArray(input.value) ?
                  input.value.map(({ preview }, index) => renderPreview(preview, index)) :
                    input.value ? renderPreview(input.value) : renderPlaceholder()
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
