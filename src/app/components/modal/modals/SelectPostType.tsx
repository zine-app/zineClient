import * as React from 'react'
import 'app/styles/postModal'

export default ({
  shouldDisplay,
  hideModal,
  showModal,
  transition="",
  props: { zineId }
}) => {
  return (
    <div
      onClick={event => event.stopPropagation()}
      className="post-modal--container"
    >
      <h1 className="post-modal--message">what would you like to post?</h1>
      <ul>
        <li>
          <button
            onClick={() => { showModal({ name: 'PostAnImage', props: { zineId } }) }}
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
  )
}
