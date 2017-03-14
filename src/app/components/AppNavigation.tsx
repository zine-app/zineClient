import * as React from 'react'
import { Link } from 'react-router'
import FacebookIcon from '../icons/facebook'
import TwitterIcon from '../icons/twitter'

export default () =>
  <nav className="zine-app--nav">
    <a href="https://www.facebook.com/zineMedia/" target="_blank">
      <FacebookIcon color="rgb(255,255,255)" className="navbar--fb-icon"/>
    </a>
    <a href="https://twitter.com/zine_media" target="_blank">
      <TwitterIcon color="rgb(255,255,255)" className="navbar--tw-icon" />
    </a>
  </nav>
