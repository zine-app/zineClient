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
      hasAuthenticated: false
    }
  }

  componentWillMount () {
    this.props.startLoading()

    this.props.dependencies()
      .then(() => {
        this.props.stopLoading()

        this.setState({
          dependenciesHaveLoaded: true
        })

        const isAuthorized = this.props.authorized()

        this.setState({ isAuthorized, hasAuthenticated: true })
      })
      .catch(error => {
        this.props.stopLoading()
      })
  }

  render () {
    return this.state.hasAuthenticated ?
      this.state.isAuthorized ?
        this.props.success() :
        this.props.failure()
      :
      null
  }

}


export default RouteHandler
