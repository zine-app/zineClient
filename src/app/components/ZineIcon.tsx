import * as React from 'react'
import ProfileIcon from 'app/icons/profile'
import 'app/styles/zineIcon'


export default ({ zine: { iconImageURL="" } }:{ zine:Constant.IZine }) =>
  <div
    className="zine-icon"
    style={{
      backgroundImage: `url(${iconImageURL})`
    }}
  >
  </div>
