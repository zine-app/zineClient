import * as React from 'react'


class Bundle extends React.Component<any, any> {
  state = {
    loading: false,
    dependencies: null,
    error: null
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState(state => ({
      loading: true,
      dependencies: null
    }))

    props
      .load()
      .then(dependencies => {
        this.setState(state => ({
          loading: false,
          dependencies
        }))
      })
      .catch(error => {
        this.setState(state => ({
          loading: false,
          error
        }))
      })
  }

  render() {
    return this.state.loading ?
      this.props.loading() :
      this.state.error ?
      this.props.error(this.state.error) :
      this.props.success()
  }
}

export default Bundle
