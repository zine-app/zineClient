import * as React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'app/styles/modal'

interface ModalProps extends React.Props<any> {
  color?: string,
  show?: boolean
}

export default ({ color = 'white', show = false, children }:ModalProps) =>
    <ReactCSSTransitionGroup
      transitionName="fadein"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
    {
      show ?
        <div className={`modal--container__${color}`}>{ children }</div>:
        null
    }
    </ReactCSSTransitionGroup>
