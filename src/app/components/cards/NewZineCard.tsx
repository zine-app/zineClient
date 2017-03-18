import * as React from 'react'
import ZineForm from 'app/containers/ZineForm'
import 'app/styles/card'

export default ({ zine }) =>
  <div className="card--container__zine">
    <div className="card-header">new zine</div>
    <ZineForm />
  </div>
