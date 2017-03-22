import * as React from 'react'
import Modal from 'app/components/Modal'
import 'app/styles/imageModal'

export default ({ shouldDisplay, hideImageModal }) =>
  <Modal show={shouldDisplay} color="black">
    <div
      className="image-modal--background"
      onClick={hideImageModal}
    >
      <div
        onClick={event => event.stopPropagation()}
        className="image-modal--container"
      >
        <h1 className="image-modal--message">upload and image</h1>
        <p>Image</p>
      </div>
    </div>
  </Modal>
