import * as React from 'react'
import 'app/styles/zineHeader'
import cloudinary from 'app/utils/cloudinary'

const zineHeaderStyle = ({ headerImageURL }) => ({
  backgroundImage: headerImageURL ?
    `url('${cloudinary({
      url: headerImageURL,
      height: 600,
      width: "414 1500"
    })}')` :
    'none'
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
