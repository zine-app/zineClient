import * as React from 'react'
import { EditorState, SelectionState } from 'draft-js'
import TrashIcon from 'app/icons/trash'
import 'app/styles/media'


const Image = ({ url = '', remove = () => null, readOnly = true }) =>
  <div
    style={{
      position: 'relative',
      boxSizing: 'border-box',
      padding: '1em 6em',
    }}
  >
  <div
    style={{
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: url ? `url('${url}')` : 'none'
    }}
  >
    <div
    style={{
      paddingTop: '70%'
    }}
    ></div>
    </div>
    {
      !readOnly &&
        <div className="media--toolbar-container">
          <button onClick={remove}>
            <TrashIcon size="4rem" color="rgb(90, 150, 210)"/>
          </button>
        </div>
    }
  </div>


export default ({ blockProps, contentState, block }) => {
  const entity = contentState.getEntity(block.getEntityAt(0))
  const { image, url } = entity.getData()

  if(blockProps.readOnly) {
    if(url) { return <Image url={url} /> }
    else { return <Image url={image.preview} /> }
  }
  else {
    const { editorState, onChange } = blockProps
    const selection = editorState.getSelection();
    const content = editorState.getCurrentContent();
    const type = entity.getType()

    const remove = () => {
      const keyAfter = content.getKeyAfter(block.key);
      const blockMap = content.getBlockMap().delete(block.key);
      const withoutAtomicBlock = content.merge({
        blockMap, selectionAfter: selection
      })

      const newState = EditorState.push(
        editorState, withoutAtomicBlock, "remove-range"
      )

      const newSelection = new SelectionState({
        anchorKey: keyAfter,
        anchorOffset: 0,
        focusKey: keyAfter,
        focusOffset: block.getLength()
      })

      const newEditorState = EditorState.forceSelection(newState, newSelection)

      onChange(newEditorState)
    }

    return (
      <Image
        url={url || image.preview}
        readOnly={false}
        remove={remove}
      />
    )
  }
}
