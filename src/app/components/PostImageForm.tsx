import React from 'react'
import DropzoneField from 'app/components/DropzoneField'
import TextField from 'app/components/fields/TextField'
import ImageField from 'app/components/fields/ImageField'


export default () =>
  <form>
    <TextField placeholder="title" name="title" />
    <div style={{ height: '1rem' }} />
    <ImageField name="image" />
    <div style={{ height: '1rem' }} />
    <TextField placeholder="description" name="description" />
    <div style={{ height: '1rem' }} />
    <TextField placeholder="tags" name="tags" />
    <div style={{ height: '1rem' }} />
    <button className="control--button__blue">save</button>
  </form>
