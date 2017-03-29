import * as React from 'react'
import 'app/styles/confirmButton'

export default ({
  children, confirming, onClick, message, className, disabled,
  onConfirm, onReject, shouldShowConfirmDialogue
}) =>
  <div>
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
    { children }
    </button>
    {
      shouldShowConfirmDialogue ?
      <div className="confirm-dialogue--container">
        <div className="confirm-dialogue--message">{message}</div>
        <div>
          <span className="confirm-dialogue--control-container">
            <button
              className="control--button"
              onClick={onReject}
            >
            no
            </button>
          </span>
          <span className="confirm-dialogue--control-container">
            <button
              className="control--button__red"
              onClick={onConfirm}
            >
            yes
            </button>
          </span>
        </div>
      </div>:
      null
    }
  </div>
