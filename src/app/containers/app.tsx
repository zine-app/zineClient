import * as React from 'react'
import WebFont from 'webfontloader'
import AppLoader from 'app/containers/AppLoader'

WebFont.load({ google: { families: ['Caveat'] } })

const App = ({ children }) =>
  <main className="zine-app--main">
    <AppLoader />
    { children }
  </main>

export default App
