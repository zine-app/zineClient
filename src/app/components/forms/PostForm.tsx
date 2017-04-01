import * as React from 'react'
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  RichUtils,
  AtomicBlockUtils,
  Entity
} from 'draft-js'
import { debounce } from 'lodash'
import MediaComponent from 'app/components/MediaComponent'
import TextField from 'app/components/fields/TextField'
import Dropzone from 'react-dropzone'
import * as validate from 'app/utils/validate'
import 'app/styles/postForm'

interface IProp extends React.Props<any> {
  onChange?: (contentState:any) => void
  readOnly?: boolean
  initialState?: any
}


export default class PostEditor extends React.Component<IProp, any> {
  constructor (props) {
    super(props)

    this.state = {
      editorState: props.initialState ?
        EditorState.createWithContent(convertFromRaw(props.initialState)):
        EditorState.createEmpty()
    }

    this.focus = this.focus.bind(this)
    this.onChange = this.onChange.bind(this)
    this.makeBlockParagraph = this.makeBlockParagraph.bind(this)
    this.makeBlockHeader = this.makeBlockHeader.bind(this)
    this.insertImage = this.insertImage.bind(this)
    this.blockRenderer = this.blockRenderer.bind(this)
    this.onFinished = debounce(this.onFinished.bind(this), 300)
  }

  private focus () { if(this.editor) this.editor.focus()  }

  private editor = null

  private onFinished () {
    if(this.props.onChange) {
      this.props.onChange(
        convertToRaw(this.state.editorState.getCurrentContent())
      )
    }
  }

  private onChange (editorState:any) {
    this.onFinished()
    this.setState(state => ({ editorState }))
  }

  private makeBlockParagraph () {
    this.onChange(RichUtils.toggleBlockType(
      this.state.editorState,
      'unstyled'
    ))
  }

  private makeBlockHeader () {
    this.onChange(RichUtils.toggleBlockType(
      this.state.editorState,
      'header-one'
    ))
  }

  private insertImage (files) {
    const contentWithEntity = this.state.editorState
      .getCurrentContent()
      .createEntity(
        'IMAGE',
        'IMMUTABLE',
        { image: files[0] })

    const newEditorState = EditorState.set(
      this.state.editorState,
      {
        currentContent: contentWithEntity
      }
    )

    this.onChange(AtomicBlockUtils.insertAtomicBlock(
      newEditorState,
      newEditorState.getCurrentContent().getLastCreatedEntityKey(),
      ' '
    ))
  }

  private blockRenderer (contentBlock) {
    if(contentBlock.getType() === 'atomic') {
      return {
        component: MediaComponent,
        editable: false,
      }
    }
  }

  render () {

    return (
      <div className="post-form--container">
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
          <div onClick={this.focus} className="post-form--editor-container">
            <Editor
              ref={editor => this.editor = editor}
              readOnly={this.props.readOnly || false}
              editorState={this.state.editorState}
              onChange={this.onChange}
              blockRendererFn={this.blockRenderer}
            />
          </div>
        </div>
        <div className="post-form--toolbar--container">
          <div className="row center-xs">
            <div className="col-xs-11 col-sm-8 col-lg-6">
              <div className="post-form--toolbar--inner-container">
                <div className="post-form--toolbar--edit-tools">
                  <button onClick={this.makeBlockParagraph}>p</button>
                  <button onClick={this.makeBlockHeader}>H</button>
                  <Dropzone
                    style={{}}
                    minSize={1}
                    maxSize={4000000}
                    accept="image/jpeg"
                    multiple={false}
                    onDropAccepted={this.insertImage}
                  >
                    Image
                  </Dropzone>
                </div>
                <div>
                  <button
                    className="control--button__blue"
                    onClick={this.insertImage}>
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
