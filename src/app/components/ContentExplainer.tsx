import * as React from 'react'

export default () =>
  <div
    style={{
      height: '60vh',
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
      padding: '3em 0em',
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
      >Nice!</p>
      <p
        style={{
          lineHeight: '2rem',
          marginBottom: '1rem'
        }}
      >
        You've created a zine.
      </p>
      <p
        style={{
          lineHeight: '2rem',
          marginBottom: '1rem'
        }}
      >
        Right now, there's not much to do here, but we're working on it.
        We are scheduled to release Posting by the 27th of March. So come back
        then to get posting!
      </p>
      <p>- Thanks, Gary and Alex</p>
    </div>
  </div>
