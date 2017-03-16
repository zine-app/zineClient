import * as React from 'react'
import 'app/styles/sidebarGroupItem'

export default ({ iconImageURL="", onClick, children }:{iconImageURL?:string, onClick?:()=>void, children?:any }) =>
  <button onClick={onClick}>
    <div
      className="sidebar--group--item"
      style={{
        backgroundImage: `url(${iconImageURL})`
      }}
    >
      { children }
    </div>
  </button>
