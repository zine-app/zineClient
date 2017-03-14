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
        fontSize: '1.8rem',
        color: 'rgb(60,60,60)',
        letterSpacing: '-0.02em',
        textAlign: 'center',
        lineHeight: '1.4em',
        fontWeight: 200,
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        borderBottom: '1px solid rgb(200,200,200)',
      }}
    >
      <p style={{marginBottom: '1rem'}}>
        <span style={{ fontFamily: 'Caveat, cursive', fontSize: '4.5rem'}}>zine</span>
      </p>
      <p>(short for magazine) is a self-published work of original
      <span style={{ color: 'rgb(90,150,210)', fontWeight: 400 }}> images</span>,
      <span style={{ color: 'rgb(200,85,220)', fontWeight: 400 }}> text</span>,
      <span style={{ color: 'rgb(215,160,40)', fontWeight: 400 }}> video </span>
      and <span style={{ color: 'rgb(200,85,220)', fontWeight: 400 }}> audio</span>,
      made by an <span style={{ color: 'rgb(90,150,210)', fontWeight: 400 }}>
      individual person</span> or
      <span style={{ color: 'rgb(200,85,220)', fontWeight: 400 }}> group</span>.</p>
    </div>
  </div>

  <div style={{ height: '10em' }} />


  <div
    style={{
      minHeight: '100vh',
      width: '100wh',
      backgroundColor: '#FFF',
      boxSizing: 'border-box',
      padding: '2rem 2rem'
    }}
  >


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
          post anything
        </h1>

        <div className="row center-xs">
          <div
            className="col-xs-12"
            style={{
              backgroundImage: "url('https://s3-us-west-1.amazonaws.com/zine-app-assets/homePageAnyMedia.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          >
            <div style={{ paddingTop: '40%' }}></div>
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
          Easily post any content, video, images, music, write blog posts or create events and sell stuff in your own store.
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
          work together
        </h1>
        <div className="row center-xs">
          <div
            className="col-xs-12 col-sm-10"
            style={{
              backgroundImage: "url('https://s3-us-west-1.amazonaws.com/zine-app-assets/homePageCollaborate.png')",
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
          Post on other zines, or invite people to post on yours.
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
          edit your theme
        </h1>
        <div className="row center-xs">
          <div
            className="col-xs-12 col-sm-10"
            style={{
              backgroundImage: "url('https://s3-us-west-1.amazonaws.com/zine-app-assets/homePageEditTheme.png')",
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
          Use simple editing tools to create your own theme.
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
          get noticed
        </h1>
        <div className="row center-xs">
          <div
            className="col-xs-12 col-sm-10"
            style={{
              backgroundImage: "url('https://s3-us-west-1.amazonaws.com/zine-app-assets/homePageShare.png')",
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
          Your content will be recommended to other people, and your subscribers will be notified when you post something.
        </h2>
        </div>
      </div>


    </div>
  </div>
</div>

export default AboutPage
