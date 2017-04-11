import * as React from 'react'
import 'app/styles/createNewChannelModal'
import 'app/styles/grid'
import CreateNewChannelForm from 'app/containers/forms/CreateNewChannelForm'
import ExitIcon from 'app/icons/cross'

export default ({ hideModal }) =>
  <div className="create-new-channel-modal--container">
    <div className="create-new-channel-modal--header">
      <button onClick={hideModal}>
        <ExitIcon size="3rem" />
      </button>
    </div>
    <div className="create-new-channel-modal--body">
      <div className="col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3">
        <h1>Create A New Channel</h1>
        <div style={{ height: '1rem' }}/>
        <h2>Channels are where you post content. Brand your channel and post content around a specific theme. For example a channel called <span style={{color: "rgb(90, 150, 210)"}}>"rock_music"</span> should contain content about rock music</h2>
        <div style={{ height: '4rem' }}/>
        <CreateNewChannelForm />
      </div>
    </div>
  </div>
