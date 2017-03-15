import * as React from 'react'
import SidebarItem from 'app/components/sidebar/Item'
import 'app/styles/sidebarGroup'

export default ({ children = [] }:{ children?:any }) =>
  <div className="sidebar--group">
    { children }
  </div>
