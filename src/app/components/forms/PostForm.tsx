import * as React from 'react'
import { Field } from 'redux-form/immutable'
import TextField from 'app/components/fields/TextField'
import PostEditor from 'app/containers/PostEditor'
import Dropzone from 'react-dropzone'
import * as validate from 'app/utils/validate'
import CameraIcon from 'app/icons/camera'
import ExitIcon from 'app/icons/cross'
import 'app/styles/postForm'
import { Map } from 'immutable'
import { map, assign, filter, reduce } from 'lodash'
import {
  convertToRaw,
  convertFromRaw,
  EditorState,
  AtomicBlockUtils
} from 'draft-js'


interface IProp extends React.Props<any> {
  pristine: boolean
  invalid: boolean
  onChange?: (contentState:any) => void
  readOnly?: boolean
  initialValues?: any
  save?: (post:any) => void
  handleSubmit?: (form:any) => any
  submitting?: boolean
  close?: () => void
}


export default ({ initialValues, submitting, anyTouched, pristine, invalid, close, handleSubmit, change, save }) => {
  const insertImage = (editorState, files) => {
    const contentWithEntity = editorState
      .getCurrentContent()
      .createEntity(
        'IMAGE',
        'IMMUTABLE',
        {
          image: files[0]
        })

    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentWithEntity }
    )

    return AtomicBlockUtils.insertAtomicBlock(
      newEditorState,
      newEditorState.getCurrentContent().getLastCreatedEntityKey(),
      ' '
    )
  }

  return (
    <div className="post-form--container">
      <div className="post-form--header--container">
        <button
          disabled={submitting}
          onClick={close}
        >
          <ExitIcon size="4em" />
        </button>
      </div>
      <div className="post-form--post-container">
        <TextField
          className="post-form--title"
          placeholder="title"
          name="title"
          validate={[
            validate.maxLength(50),
            validate.minLength(0)
          ]}
        />
        <div className="post-form--editor-container">
          <Field
            name="body"
            component={({ input: { value, onChange }}) =>
              <PostEditor
                readOnly={submitting}
                editorState={value}
                onChange={editorState =>
                  onChange(editorState)
                }
              />
            }
          />
        </div>
      </div>
      <div className="post-form--toolbar--container">
        <div className="row center-xs middle-xs">
          <div className="col-xs-11 col-sm-8 col-lg-6">
            <div className="post-form--toolbar--inner-container">
              <div className="post-form--toolbar--edit-tools">
                <Field
                  name="body"
                  component={({ input: { value, onChange } }) =>
                    <Dropzone
                      style={{}}
                      minSize={1}
                      maxSize={4000000}
                      accept="image/jpeg,image/png"
                      multiple={false}
                      onDropAccepted={files =>
                        onChange(insertImage(value, files))
                      }
                    >
                      <div style={{ height: '4em', width: '4em', cursor: 'pointer' }}>
                        <CameraIcon color="rgb(90, 150, 210)" />
                      </div>
                    </Dropzone>
                  }
                />
              </div>
              <div className="row middle-xs">
                <button
                  disabled={
                    submitting ||
                    pristine ||
                    invalid
                  }
                  className="control--button__blue"
                  onClick={handleSubmit(save)}
                >
                {submitting ? 'publishing...' : 'publish'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
