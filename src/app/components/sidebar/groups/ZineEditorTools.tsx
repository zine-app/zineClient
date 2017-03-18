import * as React from 'react'
import SidebarGroup from 'app/components/sidebar/Group'
import SidebarGroupItem from 'app/components/sidebar/Item'
import GearIcon from 'app/icons/Gear'
import 'app/styles/zineEditorTools'

interface IZineEditorProps {
  toggleSettingsCard: ()=>void
}

export default ({ toggleSettingsCard }:IZineEditorProps) =>
  <SidebarGroup>
    <button
      data-tip="zine settings"
      className="zine-editor-tools--item"
      onClick={toggleSettingsCard}
    ><GearIcon /></button>
  </SidebarGroup>
