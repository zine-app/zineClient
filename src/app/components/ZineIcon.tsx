import * as React from 'react'
import ProfileIcon from 'app/icons/profile'
import 'app/styles/zineIcon'


export default ({ zine: { iconImageURL="" }, size="medium" }:{ zine:Constant.IZine, size?:string }) =>
  <div
    className={`zine-icon__${size}`}
    style={{
      backgroundImage: iconImageURL ? `url(${iconImageURL})` : 'none'
    }}
  >
  </div>
