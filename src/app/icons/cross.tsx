import * as React from 'react'

export default ({ className = "", size = "1em", color= "#000"}) =>
  <svg height={size} width={size} className={className} viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
    <g>
    	<g>
    		<g>
    			<path fill={color} d="M25,25.5c-0.1,0-0.3,0-0.4-0.1l-10-10c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l10,10c0.2,0.2,0.2,0.5,0,0.7C25.3,25.5,25.1,25.5,25,25.5z"/>
    		</g>
    		<g>
    			<path fill={color} d="M15,25.5c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l10-10c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-10,10C15.3,25.5,15.1,25.5,15,25.5z"/>
    		</g>
    	</g>
    </g>
  </svg>
