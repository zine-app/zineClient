import * as React from 'react'
import { Editor, EditorState, convertToRaw } from 'draft-js'
import { debounce } from 'lodash'

interface IProp extends React.Props<any> {
  onChange: (contentState:any) => void
}


class PostEditor extends React.Component<IProp, any> {
  constructor (props) {
    super(props)

    this.state = { editorState: EditorState.createEmpty() }

    this.onChange = this.onChange.bind(this)
    this.onFinished = debounce(this.onFinished.bind(this), 300)
  }

  private onFinished () {
    this.props.onChange(
      convertToRaw(this.state.editorState.getCurrentContent())
    )
  }

  private onChange (editorState:any) {
    this.onFinished()
    this.setState(state => ({ editorState }))
  }

  render () {

    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    )
  }
}

export default PostEditor
