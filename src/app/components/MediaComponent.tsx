import * as React from 'react'

export default ({ blockProps, contentState, block }) => {
  const entity = contentState.getEntity(block.getEntityAt(0))
  const { image } = entity.getData()
  const type = entity.getType()

  return (
    <div
      style={{
        boxSizing: 'border-box',
        padding: '1em 6em'
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
    </div>
  )
}
