import * as React from 'react'
import 'app/styles/sidebarGroupItem'

export default ({ iconImageURL, onClick }:{iconImageURL?:string, onClick?:()=>void}) =>
  <button onClick={onClick}>
    <div
      className="sidebar--group--item"
      style={{
        backgroundImage: `url(${iconImageURL})`
      }}
    >
    </div>
  </button>
