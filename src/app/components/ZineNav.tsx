import * as React from 'react'
import 'app/styles/zineHeader'
import { Link } from 'react-router-dom'
import ZineIcon from 'app/components/ZineIcon'
import 'app/styles/zineNav'
import ReactTooltip from 'react-tooltip'

export default ({
  zine,
  user,
  toggleModal
}) =>
  <div className="zine--nav">
    <Link to={`/${zine ? zine.name : ''}`}>
      <ZineIcon url={zine ? zine.iconImageURL : ''} />
    </Link>
    <div className="zine--nav--button-container">
      {
        user && zine.ownerId === user.id &&
        <button
          className="zine--nav--button"
          onClick={toggleModal}
        >post</button>
      }
    </div>
  </div>
