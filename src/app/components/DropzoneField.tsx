import * as React from 'react'
import Dropzone from 'react-dropzone'
import { readAsDataURL } from 'app/utils/file'


export default (field) =>
  <div>
    <Dropzone
      style={{}}
      name={field.name}
      onDrop={(acceptedFiles) => {
        readAsDataURL(acceptedFiles)
          .then(dataURLs => {
            field.input.onChange(acceptedFiles.map((file, index) => ({
              src: dataURLs[index],
              file
            })))
        })
      }}
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
