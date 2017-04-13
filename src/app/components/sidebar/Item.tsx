import * as React from 'react'
import ZineIcon from 'app/components/ZineIcon'
import 'app/styles/sidebarGroupItem'

export default ({ iconImageURL="", onClick, children }:{iconImageURL?:string, onClick?:()=>void, children?:any }) =>
  <button onClick={onClick}>
    <ZineIcon url={iconImageURL} />
  </button>
