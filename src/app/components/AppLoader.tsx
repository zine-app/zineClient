import * as React from 'react'
import '../styles/appLoader.scss'
import Modal from 'app/components/Modal'

export interface AppLoaderProps extends React.Props<any> {
  shouldDisplay: boolean
}

export default ({ shouldDisplay }:AppLoaderProps) =>
  <Modal show={shouldDisplay} color="white">
    <div className="app-loader--signal"></div>
  </Modal>
