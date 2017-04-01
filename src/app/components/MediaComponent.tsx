import * as React from 'react'

export default ({ blockProps, contentState, block }) => {
  const entity = contentState.getEntity(block.getEntityAt(0))
  const { url } = entity.getData()
  const type = entity.getType()

  return (
    <div
      style={{
        backgroundImage: url ? `url('${url}')` : 'none'
      }}
    >
      Media Component
    </div>
  )
}
