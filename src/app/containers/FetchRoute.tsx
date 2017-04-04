import * as React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import assign from 'lodash'

interface IProps extends React.Props<any> {
  match: any
  load: () => Promise<any>
  render: (props:any) => any
}

class FetchRoute extends React.Component<IProps, any> {
  componentWillMount () {
    this.props.load()
  }

  componentWillReceiveProps (props) {
    this.props.match !== props.match && props.load()
  }

  render () {
    return (
      <Route {...this.props} />
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  load: async () => { await props.load(dispatch, props) }
})

export default connect(undefined, mapDispatchToProps)(FetchRoute)
