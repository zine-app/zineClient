import * as React from 'react'
import SidebarGroup from 'app/components/sidebar/Group'
import SidebarGroupItem from 'app/components/sidebar/Item'
import GearIcon from 'app/icons/Gear'
import PencilIcon from 'app/icons/Pencil'
import 'app/styles/zineEditorTools'

export default () =>
  <SidebarGroup>
    <button className="zine-editor-tools--item"><GearIcon /></button>
    <button className="zine-editor-tools--item"><PencilIcon /></button>
  </SidebarGroup>
