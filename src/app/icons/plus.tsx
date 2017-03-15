import * as React from 'react'

export default ({ color = 'rgb(0,0,0)', opacity = 1, className = "" }) =>
  <svg  opacity={opacity} className={className} viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
    <g>
    	<g>
    		<g>
    			<path fill={color} d="M26,20.5H14c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h12c0.3,0,0.5,0.2,0.5,0.5S26.3,20.5,26,20.5z"/>
    		</g>
    		<g>
    			<path fill={color} d="M20,26.5c-0.3,0-0.5-0.2-0.5-0.5V14c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12C20.5,26.3,20.3,26.5,20,26.5z"/>
    		</g>
    	</g>
    </g>
  </svg>
