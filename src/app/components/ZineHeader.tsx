import * as React from 'react'
import 'app/styles/zineHeader'

const zineHeaderStyle = ({ headerImageURL }) => ({
  backgroundImage: headerImageURL ? `url('${headerImageURL}')` : 'none'
})

export default ({
  zine = {
    name: '',
    description: '',
    headerImageURL: ''
  }
}) =>
  <div
    className="zine--header"
    style={zineHeaderStyle(zine)}
  >
    <div className="zine--header--top-bar">
      <div>
        <div className="zine--header--top-bar--zine-name">
          {zine.name}
        </div>
        <div className="zine--header--top-bar--zine-description">
          {zine.description}
        </div>
      </div>
    </div>
  </div>
