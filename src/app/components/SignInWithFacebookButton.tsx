import * as React from 'react'

export default ({ signIn }) =>
  <button
    onClick={signIn}
    style={{
      color: '#FFF',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: '1.2em',
      opacity: 0.8
    }}
  >sign in</button>
