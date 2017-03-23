import * as React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'app/styles/modal'
import PostAnImage from 'app/components/modal/modals/PostAnImage'
import SelectPostType from 'app/components/modal/modals/SelectPostType'

const modals = {
  PostAnImage,
  SelectPostType
}

const getModal = modalName => modals[modalName]

const renderModal = (modalName, props={}) => {
  const Modal = getModal(modalName)

  return Modal ?
    <Modal {...props} /> :
    null
}

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
  props?: any
  modalName: string
}

export default ({
  transition="",
  color = 'white', show = false, children,
  modalName, props
}:ModalProps) =>
    <ReactCSSTransitionGroup
      transitionName={getTransition(transition).name}
      transitionEnterTimeout={getTransition(transition).enterTimeout}
      transitionLeaveTimeout={getTransition(transition).leaveTimeout}
    >
    {
      show ? renderModal(modalName, props) : null
    }
    </ReactCSSTransitionGroup>
