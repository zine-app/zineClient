import * as React from 'react'
import { Editor, EditorState, convertFromRaw } from 'draft-js'
import MediaComponent from 'app/components/MediaComponent'

const blockRenderer = contentBlock => {
  if(contentBlock.getType() === 'atomic') {
    return {
      component: MediaComponent,
      editable: false,
      props: {
        readOnly: true
      }
    }
  }
}

export default ({ rawEditorState }) =>
  rawEditorState ?
    <Editor
      readOnly={true}
      blockRendererFn={blockRenderer}
      textAlignment="left"
      editorState={EditorState.createWithContent(convertFromRaw(rawEditorState.toJS()))}
    /> :
    null
