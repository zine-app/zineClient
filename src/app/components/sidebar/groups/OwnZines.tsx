import * as React from 'react'
import SidebarGroup from 'app/components/sidebar/Group'
import ZineButton from 'app/components/ZineButton'
import SidebarGroupItem from 'app/components/sidebar/Item'

export default ({ zines = [] }) =>
  <SidebarGroup>
    {
      zines.map((zine, index) =>
        <SidebarGroupItem iconImageURL={zine.get('iconImageURL')} key={index} />
      )
    }
  </SidebarGroup>
