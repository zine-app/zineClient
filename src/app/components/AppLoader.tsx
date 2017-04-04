import * as React from 'react'
import '../styles/appLoader.scss'

export interface AppLoaderProps extends React.Props<any> {
  shouldDisplay: boolean
}

export default ({ shouldDisplay=false }:AppLoaderProps) =>
  shouldDisplay ?
    <div className="app-loader--container">
      <div className="app-loader--signal"></div>
    </div> :
    null
