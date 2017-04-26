import * as React from 'react'
import Divider from 'app/components/Divider'
import ExitIcon from 'app/icons/cross'
import 'app/styles/modal'
import 'app/styles/control'

export default ({ actions }) =>
  <div className="modal--body__white">
    <div style={{ display:'flex', flexDirection:'column', alignItems: 'flex-end' }}>
      <button onClick={actions.modal.hide}><ExitIcon size="3rem" /></button>
    </div>
    <div>signin/signup with email</div>
    <Divider height="3rem" />
    <label htmlFor="email" className="control--label__large">email</label>
    <input type="text" name="email" className="control--field__large" placeholder="example@zine.media" />
    <Divider height="2rem" />
    <label htmlFor="password" className="control--label__large">password</label>
    <input type="password" name="password" className="control--field__large" placeholder="password"/>
    <Divider height="1rem" />
    <button style={{ display: 'flex', color: 'rgb(90, 150, 210)' }}>forgot password?</button>
    <Divider height="3rem" />
    <p style={{ color: 'rgb(120,120,120)' }}>sign in to your account</p>
    <Divider height="0.8rem" />
    <button disabled={true} className="control--button__blue__large">signin/signup</button>
  </div>


  // <p style={{ color: 'rgb(120,120,120)' }}>create a new account</p>
