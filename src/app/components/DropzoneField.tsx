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
              preview: dataURLs[index],
              file
            })))
        })
      }}
    >
      {
        !field.meta.dirty && field.renderInitialValue(field.input.value)
      }
      {
        field.input.value &&
        Array.isArray(field.input.value) &&
        (
          <ul>
          {
            field.input.value.map((value) => field.previewImages(value.preview))
          }
          </ul>
        )
      }
    </Dropzone>
    {
      field.meta.touched &&
      field.meta.error &&
        <span className="error">{field.meta.error}</span>
    }
  </div>
