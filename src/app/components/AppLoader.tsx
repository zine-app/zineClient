import * as React from 'react'
import '../styles/appLoader.scss'
import Modal from 'app/components/Modal'


export default ({ shouldDisplay, color = 'white' }:AppLoaderProps) =>
  <Modal color={color} show={shouldDisplay}>
    <div className="app-loader--signal"></div>
  </Modal>
