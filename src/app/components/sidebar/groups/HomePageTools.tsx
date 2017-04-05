import * as React from 'react'
import SidebarGroup from 'app/components/sidebar/Group'
import NewZineButton from 'app/containers/NewZineButton'
import { Link } from 'react-router-dom'
import HomeIcon from 'app/icons/home'

export default () =>
  <SidebarGroup>
    <Link data-tip="home" to="/">
      <HomeIcon size="3rem" color="rgb(80,80,80)" />
    </Link>
    <div style={{height: '0.3rem'}} />
    <NewZineButton />
  </SidebarGroup>
