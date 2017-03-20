import * as React from 'react'
import 'app/styles/slideout'
import 'app/styles/animations/slideInLeft'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DefaultCard from 'app/components/cards/DefaultCard'
import UserProfileCard from 'app/components/cards/UserProfileCard'
import ZineCard from 'app/components/cards/ZineCard'
import NewZineCard from 'app/components/cards/NewZineCard'


const cards = {
  default: DefaultCard,
  userProfile: UserProfileCard,
  zine: ZineCard,
  newZine: NewZineCard
}

const getCard = cardName =>
  cards[cardName] ? cards[cardName] : cards['default']

const renderCard = (cardName, props) => {
  const Card = getCard(cardName)

  return <Card {...props} />
}

export default ({ cardName, isOpen=false, zine, closeSlideout }) =>
  <div
    className="slideout--container"
    style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    onClick={closeSlideout}
  >
    <ReactCSSTransitionGroup
      transitionName="slideInLeft"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      {
        isOpen ?
          <div
            className="slideout--card"
            onClick={event => {
              event.stopPropagation()
            }}
          >
            { renderCard(cardName, { zine }) }
          </div> :
          null
      }
    </ReactCSSTransitionGroup>
  </div>
