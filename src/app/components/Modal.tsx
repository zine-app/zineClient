import * as React from 'react'

export default ({ color = 'white', show = true, children }:ModalProps) =>
  <div className={`modal--container__${color}`}>{ children }</div>
