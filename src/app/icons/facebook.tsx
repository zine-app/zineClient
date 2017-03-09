import * as React from 'react'

export default ({ color = 'rgb(0,0,0)', opacity = 1, className = "" }) =>
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24"><path fill={color} opacity={opacity} d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
