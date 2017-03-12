import * as React from 'react'
import 'app/styles/slideout'
import 'app/styles/animations/slideInLeft'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DefaultCard from 'app/components/cards/DefaultCard'
import UserProfileCard from 'app/components/cards/UserProfileCard'


const cards = {
  'default': <DefaultCard />,
  'userProfile': <UserProfileCard />
}

const getCard = cardName =>
  cards[cardName] ? cards[cardName] : cards['default']

export default ({ cardName, isOpen=false }) =>
  <div className="slideout--container">
    <ReactCSSTransitionGroup
      transitionName="slideInLeft"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      {
        isOpen ?
          <div className="slideout--card">
            { getCard(cardName) }
          </div> :
          null
      }
    </ReactCSSTransitionGroup>
  </div>
