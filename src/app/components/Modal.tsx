import * as React from 'react'
import 'app/styles/modal'

interface ModalProps extends React.Props<any> {
  color: string,
  show: boolean
}

export default ({ color = 'white', show = false, children }:ModalProps) =>
  show ?
    <div className={`modal--container__${color}`}>{ children }</div> :
    null
