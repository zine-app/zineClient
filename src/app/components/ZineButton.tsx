import * as React from 'react'
import ZineIcon from 'app/components/ZineIcon'
import 'app/styles/userProfileButton'

export default ({ zine, onClick }:{ zine:Constant.IZine, onClick?:()=>void }) =>
  <button className="user-profile-button" onClick={onClick}>
    <ZineIcon url={zine ? zine.iconImageURL : ''} />
  </button>
