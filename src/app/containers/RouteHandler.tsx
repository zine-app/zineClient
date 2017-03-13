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

const defaultProps = {
  dependencies: () => { Promise.resolve() },
  authorized: () => {},
  success: () => null,
  failure: () => null,
  startLoading: () => {},
  stopLoading: () => {}
}

class RouteHandler extends React.Component<RouteHandlerProps, any> {
  constructor (props) {
    super(assign(props, defaultProps))

    this.state = {
      dependenciesHaveLoaded: false,
    }

    this.props.startLoading()

    this.props.dependencies()
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
