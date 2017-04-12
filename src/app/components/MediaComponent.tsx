import * as React from 'react'
import { EditorState, SelectionState } from 'draft-js'
import TrashIcon from 'app/icons/trash'
import SmallImageIcon from 'app/icons/smallImage'
import MediumImageIcon from 'app/icons/mediumImage'
import LargeImageIcon from 'app/icons/largeImage'
import 'app/styles/media'


import cloudinary from 'app/utils/cloudinary'

const calculateImageWidth = size => {
  const sizeToWidthMap = {
    small: 450,
    medium: 900,
    large: 1500
  }

  return sizeToWidthMap[size]
}

const Image = ({ url = '', remove = () => null, readOnly = true, edit, size = "medium" }) =>
  <div
    style={{
      position: 'relative',
      boxSizing: 'border-box',
      padding: '1em 0em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <img
      src={cloudinary({
        url: url,
        width: `414 ${calculateImageWidth(readOnly ? size : 'large')}`,
      })}
      className={`media-component--image__${size}`}
    />
    {
      !readOnly &&
        <div className="media--toolbar-container" style={{ zIndex: 1 }}>
          <div className="button-set__blue">
            <button onMouseDown={remove}>
              <TrashIcon size="4rem" color="rgb(255,255,255)"/>
            </button>
            <button onMouseDown={() => edit({ size: "small" })}>
              <SmallImageIcon size="4rem" color="rgb(255,255,255)"/>
            </button>
            <button onMouseDown={() => edit({ size: "medium" })}>
              <MediumImageIcon size="4rem" color="rgb(255,255,255)"/>
            </button>
            <button onMouseDown={() => edit({ size: "large" })}>
              <LargeImageIcon size="4rem" color="rgb(255,255,255)"/>
            </button>
          </div>
        </div>
    }
  </div>


export default ({ blockProps, contentState, block }) => {
  const key = block.getEntityAt(0)
  const entity = contentState.getEntity(key)
  const { image, url, size } = entity.getData()

  return (
    <Image
      url={url || image.preview}
      size={size}
      readOnly={blockProps.readOnly}
      remove={() => blockProps.remove(block.key)}
      edit={options => blockProps.edit(key, options)}
    />
  )
}
