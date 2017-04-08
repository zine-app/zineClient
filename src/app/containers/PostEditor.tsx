import * as React from 'react'
import { debounce } from 'lodash'
import MediaComponent from 'app/components/MediaComponent'
import 'draft-js/dist/Draft.css'

import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  RichUtils,
  AtomicBlockUtils,
  Entity,
  DefaultDraftBlockRenderMap,
  SelectionState
} from 'draft-js'

interface IProp extends React.Props<any> {
  editorState?: any
  onChange?: (editorState:any) => void
  readOnly?: boolean
}

export default class PostEditor extends React.Component<IProp, any> {
  constructor (props) {
    super(props)

    this.state = {
      editorState: props.editorState ||  EditorState.createEmpty()
    }

    this.editor = null
    this.focus = this.focus.bind(this)
    this.onChange = this.onChange.bind(this)
    this.removeBlock = this.removeBlock.bind(this)
    this.makeBlockParagraph = this.makeBlockParagraph.bind(this)
    this.makeBlockHeader = this.makeBlockHeader.bind(this)
    this.blockRenderer = this.blockRenderer.bind(this)
    this.onFinished = debounce(this.onFinished.bind(this), 300)
  }

  componentWillReceiveProps (props) {
    if(props.editorState !== this.state.editorState) {
      this.setState(state => ({
        editorState: props.editorState
      }))
    }
  }

  private editor = null

  private focus () { this.editor && this.editor.focus() }

  private onFinished () {
    if(this.props.onChange) {
      this.props.onChange(this.state.editorState)
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

  private blockRenderer (contentBlock) {
    if(contentBlock.getType() === 'atomic') {
      return {
        component: MediaComponent,
        props: {
          readOnly: this.props.readOnly || false,
          remove: this.removeBlock
        }
      }
    }
  }

  private removeBlock (key) {
    const content = this.state.editorState.getCurrentContent()
    const block = content.getBlockForKey(key)
    const selection = this.state.editorState.getSelection()
    const keyAfter = content.getKeyAfter(key)
    const blockMap = content.getBlockMap().delete(key)

    const withoutAtomicBlock = content.merge({
      blockMap, selectionAfter: selection
    })

    const newState = EditorState.push(
      this.state.editorState,
      withoutAtomicBlock,
      "remove-range"
    )

    const newSelection = new SelectionState({
      anchorKey: keyAfter,
      anchorOffset: 0,
      focusKey: keyAfter,
      focusOffset: block.getLength()
    })

    const newEditorState = EditorState.forceSelection(newState, newSelection)

    this.onChange(newEditorState)
  }

  render () {
    return (
      <div
        onClick={this.focus}
      >
        <Editor
          ref={editor => this.editor = editor}
          stripPastedStyles={true}
          readOnly={this.props.readOnly || false}
          editorState={this.state.editorState}
          onChange={this.onChange}
          blockRendererFn={this.blockRenderer}
          textAlignment="left"
          placeholder="share something"
        />
      </div>
    )
  }
}
