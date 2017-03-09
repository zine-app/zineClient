import * as React from 'react'

export default ({ className = "", size = "1em", color= "#000"}) =>
  <svg width={size} height={size} fill={color} x="0px" y="0px" viewBox="10 10 20 20" enableBackground="new 0 0 40 40" className={className}>
    <g>
    	<g>
    		<g>
    			<path d="M20,23.7c-0.7,0-1.3-0.3-1.8-0.7l-4.6-4.6c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l4.6,4.6 c0.6,0.6,1.5,0.6,2.1,0l4.6-4.6c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-4.6,4.6C21.3,23.4,20.7,23.7,20,23.7z"/>
    		</g>
    	</g>
    </g>
  </svg>
