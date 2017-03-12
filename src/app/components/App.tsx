import * as React from 'react'
import 'app/styles/reset'
import 'app/styles/app'
import AppLoader from 'app/containers/AppLoader'

export default ({ children }) =>
  <main className="zine-app--main">
    <AppLoader />
    { children }
  </main>
