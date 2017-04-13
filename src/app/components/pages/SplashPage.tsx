import * as React from 'react'
import FacebookLoginButton from 'app/containers/facebookLoginButton'
import UserProfile from 'app/containers/UserProfile'
import LogoutButton from 'app/containers/LogoutButton'
import AppNavigation from 'app/components/AppNavigation'
import ArrowIcon from 'app/icons/arrow'
import AboutPage from 'app/components/pages/AboutPage'
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll'
import 'app/styles/splashPage.scss'


const SplashPage = () =>
<div>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh',
      position: 'relative'
    }}
  >
    <div className="relaxing-background"></div>
    <div>
      <AppNavigation />
    </div>
    <div
      style={{
      }}
    >
      <div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 className="zine-logo">zine</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2 className="zine-tagline">A fresh way to discover and create content online</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FacebookLoginButton theme="air" />
          </div>
        </div>
      </div>
    </div>
    <div className="zine-app--footer">
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <ScrollLink to="aboutPage" smooth={true} duration={800} >
          <ArrowIcon size="5em" color="rgb(255,255,255)" />
        </ScrollLink>
      </div>
    </div>
  </div>
  <ScrollElement name="aboutPage">
    <AboutPage />
  </ScrollElement>
  <div className="row center-xs" style={{ backgroundColor: '#FFF', padding: "8rem 0" }}>
    <div className="col-xs-10">
      <FacebookLoginButton theme="bubble" />
    </div>
  </div>
  <div
    style={{
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'white',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: '1.4em',
      position: 'relative',
      backgroundColor: 'rgb(45,230,100)'
    }}
  >
    <div>made by</div>
    <div>Gary and Alex</div>
  </div>
</div>


export default SplashPage
