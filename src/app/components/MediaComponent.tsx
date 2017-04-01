import * as React from 'react'
import { EditorState, SelectionState } from 'draft-js'
import TrashIcon from 'app/icons/trash'
import 'app/styles/media'

export default ({ blockProps, contentState, block }) => {
  const entity = contentState.getEntity(block.getEntityAt(0))
  const { editorState, onChange } = blockProps
  const selection = editorState.getSelection();
  const content = editorState.getCurrentContent();
  const { image } = entity.getData()
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
          backgroundImage: image.preview ? `url('${image.preview}')` : 'none'
        }}
      >
        <div
          style={{
            paddingTop: '70%'
          }}
        ></div>
      </div>
      <div className="media--toolbar-container">
        <button onClick={remove}>
          <TrashIcon size="4rem" color="rgb(90, 150, 210)"/>
        </button>
      </div>
    </div>
  )
}
