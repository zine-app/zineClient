import * as React from 'react'
import ProfileIcon from 'app/icons/profile'
import 'app/styles/zineIcon'


export default ({ url="", size="medium" }:{ zine:Constant.IZine, size?:string }) =>
  <div
    className={`zine-icon__${size}`}
    style={{
      backgroundImage: url ? `url(${url})` : 'none'
    }}
  >
  </div>
