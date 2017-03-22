import * as React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'app/styles/modal'

const transitions = {
  default: {
    name: '',
    enterTimeout: 1,
    leaveTimeout: 1
  },

  fade: {
    name: 'fadein',
    enterTimeout: 200,
    leaveTimeout: 300
  }
}

const getTransition = transision =>
  transitions[transision] || transitions['default']

interface ModalProps extends React.Props<any> {
  color?: string
  show?: boolean
  transition?: string
}

export default ({
  transition="",
  color = 'white', show = false, children
}:ModalProps) =>
    <ReactCSSTransitionGroup
      transitionName={getTransition(transition).name}
      transitionEnterTimeout={getTransition(transition).enterTimeout}
      transitionLeaveTimeout={getTransition(transition).leaveTimeout}
    >
    {
      show ?
        <div className={`modal--container__${color}`}>{ children }</div>:
        null
    }
    </ReactCSSTransitionGroup>
