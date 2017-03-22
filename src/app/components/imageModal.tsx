import * as React from 'react'
import Modal from 'app/components/Modal'
import PostImageForm from 'app/containers/PostImageForm'
import 'app/styles/imageModal'

export default ({ shouldDisplay, hideImageModal, transition }) =>
  <Modal
    show={shouldDisplay}
    color="black"
    transition={transition}
  >
    <div
      className="image-modal--background"
      onClick={() => hideImageModal({ transition: 'fade' })}
    >
      <div
        onClick={event => event.stopPropagation()}
        className="image-modal--container"
      >
        <h1 className="image-modal--message">upload and image</h1>
        <div style={{ height: '2rem' }} />
        <PostImageForm />
      </div>
    </div>
  </Modal>
