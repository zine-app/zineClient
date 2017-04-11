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
    <img src={url} width="100%" />
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

  return (
    <Image
      url={url || image.preview}
      readOnly={blockProps.readOnly}
      remove={() => blockProps.remove(block.key)}
    />
  )
}
