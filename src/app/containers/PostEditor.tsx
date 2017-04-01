import * as React from 'react'
import { Editor, EditorState, convertToRaw, convertFromRaw, RichUtils, AtomicBlockUtils } from 'draft-js'
import { debounce } from 'lodash'
import MediaComponent from 'app/components/MediaComponent'

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

    this.onChange = this.onChange.bind(this)
    this.makeBlockParagraph = this.makeBlockParagraph.bind(this)
    this.makeBlockHeader = this.makeBlockHeader.bind(this)
    this.insertImage = this.insertImage.bind(this)
    this.blockRenderer = this.blockRenderer.bind(this)
    this.onFinished = debounce(this.onFinished.bind(this), 300)
  }

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

  private insertImage (event) {
    event.preventDefault()

    this.onChange(AtomicBlockUtils.insertAtomicBlock(
      this.state.editorState,
      null,
      ' '
    ))
  }

  private blockRenderer (contentBlock) {
    if(contentBlock.getType() === 'atomic') {
      return {
        component: MediaComponent,
        editable: false,
        props: {
          foo: 'bar'
        }
      }
    }
  }

  render () {

    return (
      <div>
        <Editor
          readOnly={this.props.readOnly || false}
          editorState={this.state.editorState}
          onChange={this.onChange}
          blockRendererFn={this.blockRenderer}
        />
        <button onClick={this.makeBlockParagraph}>p</button>
        <button onClick={this.makeBlockHeader}>H</button>
        <button onMouseDown={this.insertImage}>Image</button>
        <button className="control--button__blue" onClick={this.insertImage}>save</button>
      </div>
    )
  }
}
