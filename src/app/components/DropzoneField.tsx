import * as React from 'react'
import Dropzone from 'react-dropzone'

export default (field) =>
  <div>
    <Dropzone
      style={{} }
      name={field.name}
      onDrop={(acceptedFiles) => field.input.onChange(acceptedFiles)}
    >
      {
        (field.meta.pristine && !field.input.value) ?
          field.placeholder :
          field.input.value
      }
    </Dropzone>
    {
      field.meta.touched &&
      field.meta.error &&
        <span className="error">{field.meta.error}</span>
    }
  </div>
