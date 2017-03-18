import * as React from 'react'
import ZineForm from 'app/containers/ZineForm'
import 'app/styles/card'

export default ({ zine }) =>
  <div className="card--container__zine">
    <ZineForm zine={zine} />
  </div>
