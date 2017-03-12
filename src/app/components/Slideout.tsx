import * as React from 'react'
import 'app/styles/slideout'
import 'app/styles/animations/slideInLeft'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default ({ children = [], isOpen=false }) =>
  <div className="slideout--container">
    <ReactCSSTransitionGroup
      transitionName="slideInLeft"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      {
        isOpen ?
          <div className="slideout--card">
            { children }
          </div> :
          null
      }
    </ReactCSSTransitionGroup>
  </div>
