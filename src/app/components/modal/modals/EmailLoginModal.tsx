import * as React from 'react'
import EmailSignInForm from 'app/containers/forms/EmailSignInForm'
import ExitIcon from 'app/icons/cross'
import 'app/styles/modal'

export default ({ actions }) =>
  <div className="modal--body__white">
    <div style={{ display:'flex', flexDirection:'column', alignItems: 'flex-end' }}>
      <button onClick={actions.modal.hide}><ExitIcon size="3rem" /></button>
    </div>
    <EmailSignInForm />
  </div>
