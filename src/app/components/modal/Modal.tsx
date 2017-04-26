import * as React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'app/styles/modal'
import Post from 'app/components/modal/modals/PostModal'
import createNewChannel from 'app/components/modal/modals/CreateNewChannelModal'
import login from 'app/components/modal/modals/LoginModal'
import emailLogin from 'app/components/modal/modals/EmailLoginModal'

const modals = {
  Post,
  createNewChannel,
  login,
  emailLogin
}

const getModal = name => modals[name]

const renderModal = (name, props={}) => {
  const Modal = getModal(name)

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
  transitions[transision] ? transitions[transision] : transitions['default']

interface ModalProps extends React.Props<any> {
  theme?: string
  shouldDisplay?: boolean
  transition?: string
  props?: any
  name: string
  hide: () => void
  show: () => void
}

export default (props:ModalProps) =>
    <ReactCSSTransitionGroup
      transitionName={getTransition(props.transition).name}
      transitionEnterTimeout={getTransition(props.transition).enterTimeout}
      transitionLeaveTimeout={getTransition(props.transition).leaveTimeout}
    >
    {
      props.shouldDisplay ?
        <div
          className={`modal--container__${props.theme}`}
          onClick={props.hide}
        >
          <div onClick={event => event.stopPropagation()}>
          {renderModal(props.name, {...props, props: props.props ? props.props.toObject() : null, hideModal:props.hide, showModal:props.show})}
          </div>
        </div> :
        null
    }
    </ReactCSSTransitionGroup>
