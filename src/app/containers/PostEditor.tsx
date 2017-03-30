import * as React from 'react'
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { debounce } from 'lodash'

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

  render () {

    return (
      <Editor
        readOnly={this.props.readOnly || false}
        editorState={this.state.editorState}
        onChange={this.onChange}
      />
    )
  }
}
