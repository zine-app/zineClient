import * as React from 'react'
import 'app/styles/postModal'

export default ({
  shouldDisplay,
  hidePostModal,
  showImageModal,
  transition="",

}) =>
  <div
    className="post-modal--background"
    onClick={() => hidePostModal({ transition: 'fade' })}
  >
    <div
      onClick={event => event.stopPropagation()}
      className="post-modal--container"
    >
      <h1 className="post-modal--message">what would you like to post?</h1>
      <ul>
        <li>
          <button
            onClick={() => {
              hidePostModal()
              showImageModal()
            }}
            className="control--button"
          >image</button>
        </li>
        <li>
          <button
            className="control--button"
          >article</button>
        </li>
      </ul>
    </div>
  </div>
