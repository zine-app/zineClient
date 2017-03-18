import * as React from 'react'
import { assign } from 'lodash'

interface RouteHandlerProps extends React.Props<{}> {
  dependencies?: () => Promise<any>
  authorized?: () => boolean
  success?: () => any
  failure?: () =>any
  startLoading?: () => any
  stopLoading?: () => any
}


class RouteHandler extends React.Component<RouteHandlerProps, any> {
  constructor (props) {
    super(props)

    this.state = {
      dependenciesHaveLoaded: false,
    }

    this.loadDependencies()
  }

  private loadDependencies () {
    this.props.startLoading()

    const deps = this.props.dependencies()

    deps
    .then(() => {
      this.props.stopLoading()

      this.setState({
        dependenciesHaveLoaded: true
      })
    })
    .catch(error => {
      this.props.stopLoading()
    })
  }

  componentWillReceiveProps (props) {
    if(props !== this.props) this.loadDependencies()
  }

  render () {
    return this.state.dependenciesHaveLoaded ?
      this.props.authorized() ?
        this.props.success() :
        this.props.failure()
      :
      null
  }

}


export default RouteHandler
