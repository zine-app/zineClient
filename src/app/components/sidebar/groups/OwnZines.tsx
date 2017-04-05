import * as React from 'react'
import SidebarGroup from 'app/components/sidebar/Group'
import ZineButton from 'app/components/ZineButton'
import SidebarGroupItem from 'app/components/sidebar/Item'
import NewZineButton from 'app/containers/NewZineButton'
import { Link } from 'react-router-dom'

export default ({ zines = [] }) =>
  <SidebarGroup>
    {
      zines.map((zine, index) =>
        <Link to={`/${zine ? zine.name : ''}`} key={index} data-tip={zine.name}>
          <SidebarGroupItem iconImageURL={zine.get('iconImageURL')} />
        </Link>
      )
    }
    <NewZineButton />
  </SidebarGroup>
