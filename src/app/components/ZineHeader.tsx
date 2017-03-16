import * as React from 'react'
import 'app/styles/zineHeader'

export default ({ zine: { name, headerImageUrl = '' }, user }) =>
  <div
    className="zine--header"
    style={{
      backgroundImage: `url('${headerImageUrl}')`
    }}
  >
    <div className="zine--header--top-bar">
      <div className="zine--header--top-bar--zine-name">
        {name}
      </div>
    </div>
  </div>
