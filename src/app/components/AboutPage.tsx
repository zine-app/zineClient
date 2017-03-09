import * as React from 'react'

const AboutPage = () =>
  <div
    style={{
      minHeight: '100vh',
      width: '100wh',
      backgroundColor: '#FFF',
      boxSizing: 'border-box',
      padding: '2rem 2rem'
    }}
  >
    <div className="row center-xs">
      <div
        className="col-xs-9 col-sm-8 col-lg-4"
        style={{
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontSize: '2.2rem',
          color: 'rgb(60,60,60)',
          letterSpacing: '-0.02em',
          textAlign: 'center',
          lineHeight: '1.5em',
          fontWeight: 200,
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <p style={{marginBottom: '1rem'}}>If you have ever wished it could be easier to <span style={{ color: 'rgb(90,150,210)', fontWeight: 400 }}>share</span> the <span style={{ color: 'rgb(200,85,220)', fontWeight: 400 }}>content</span> you want, the way you want, you're in the right place. We're building a <span style={{color: "rgb(215,160,40)", fontWeight: 400 }}>new media</span> platform where <span style={{ color: 'rgb(200,85,220)', fontWeight: 400 }}>creative</span> people are in <span style={{ color: 'rgb(200,85,220)', fontWeight: 400 }}>control</span>, and their work is the rocket fuel that propels them forward</p>
      </div>
    </div>
    <div>

    <div className="row center-xs">
      <div className="col-xs-12 col-sm-8  ">
        <h1
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: 'rgb(60,60,60)',
            textTransform: 'lowercase',
            letterSpacing: '-0.04 em',
            textAlign: 'center',
            fontWeight: 200,
            marginBottom: '1.2rem',
            lineHeight: "2em",
            fontSize: '3rem',
          }}
        >
          create
        </h1>

        <div className="row center-xs">
          <div
            className="col-xs-12 col-sm-8"
            style={{
              backgroundImage: "url('https://s3-us-west-1.amazonaws.com/zine-app-assets/homePageCreate.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          >
            <div style={{ paddingTop: '80%' }}></div>
          </div>
        </div>
        <h2
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: 'rgb(140,140,140)',
            letterSpacing: '-0.04 em',
            textAlign: 'center',
            fontWeight: 200,
            marginTop: '2rem',
            marginBottom: '6rem',
            lineHeight: "1.6em",
            fontSize: '2rem'
          }}
        >
          Take control! Easily upload any content, video, images, music, write blog posts, create events and sell stuff in your own store. Use simple editing tool to get the look you want.
        </h2>
      </div>
    </div>


    <div style={{ height: '10em' }} />


    <div className="row center-xs">
      <div className="col-xs-12 col-sm-8">
        <h1
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: 'rgb(60,60,60)',
            textTransform: 'lowercase',
            letterSpacing: '-0.04 em',
            textAlign: 'center',
            fontWeight: 200,
            marginBottom: '2rem',
            fontSize: '3rem',
          }}
        >
          together
        </h1>
        <div className="row center-xs">
          <div
            className="col-xs-12 col-sm-8"
            style={{
              backgroundImage: "url('https://s3-us-west-1.amazonaws.com/zine-app-assets/homePageDiscover.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          >
            <div style={{ paddingTop: '80%' }}></div>
          </div>
        </div>
        <h2
          style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: 'rgb(140,140,140)',
            letterSpacing: '-0.04 em',
            textAlign: 'center',
            fontWeight: 200,
            marginTop: '2rem',
            marginBottom: '6rem',
            lineHeight: "1.6em",
            fontSize: '2rem'
          }}
        >
          We want to bring people together. Great content is best shared with others who will enjoy it. We suggest your content to people who are interested, and let your subscribers know when you upload something new. Work with other creatives on joint projects.
        </h2>
        </div>
      </div>
    </div>
  </div>

export default AboutPage
