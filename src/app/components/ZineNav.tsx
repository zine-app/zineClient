import * as React from 'react'
import 'app/styles/zineHeader'
import { Link } from 'react-router-dom'
import ZineIcon from 'app/components/ZineIcon'
import 'app/styles/zineNav'
import ReactTooltip from 'react-tooltip'

export default ({ zine, user, togglePostModal }) =>
  <div className="zine--nav">
    <Link to={zine.name}>
      <ZineIcon zine={zine} />
    </Link>
    <div className="zine--nav--button-container">
      <button className="zine--nav--button">subscribe</button>
      <button
        className="zine--nav--button"
        onClick={togglePostModal}
      >post</button>
    </div>
  </div>
