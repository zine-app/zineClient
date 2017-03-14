import * as React from 'react'

export default () =>
  <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Helvetica, Arial, san-serif',
      fontSize: '1.4rem',
      backgroundColor: 'rgb(245,245,245)',
      color: 'rgb(120,120,120)',
      boxSizing: 'border-box',
      padding: '5em 0em',
      textAlign: 'center',
      fontWeight: 200
    }}
  >
    <div
      className="col-xs-10 col-sm-8 col-lg-6"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <p
        style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          color: 'rgb(80,80,80)',

        }}
      >Thanks for signing up!</p>
      <p
        style={{
          lineHeight: '2rem',
          marginBottom: '1rem'
        }}
      >
        We know you want more! and we promise we're working hard on it.
        We release new features every Monday, so follow us on <a href="https://www.facebook.com/zineMedia/" target="_blank">Facebook</a> or
        <a href="https://twitter.com/zine_media" target="_blank">Twitter</a> to get feature announcements, make requests, or just to say hello!
      </p>
      <p>- Gary and Alex</p>
    </div>
  </div>
