import * as React from 'react'
import { connect } from 'react-redux'
import setProps from 'app/actions/UI/setUIProps'
import startLoading from 'app/actions/UI/startLoading'
import stopLoading from 'app/actions/UI/stopLoading'
import createUI from 'app/actions/UI/createUI'
import { isEqual } from 'lodash'


interface IProps extends React.Props<{}> {
  Component: any
  name: string
  load: () => Promise<any>
  create: () => any
  startLoading: () => any
  stopLoading: () => any
  setProps: () => any
  initialProps: any
  ui: any
}

class UIWrapper extends React.Component<IProps, any> {
  componentWillMount () {
    const { load, startLoading, stopLoading } = this.props

    if(!this.props.ui) {
      this.props.create()


      if(load) {
        startLoading()
        load().then(stopLoading())
      }
    }
  }

  componentWillReceiveProps (props) {
    const { load, startLoading, stopLoading } = this.props


    if(!isEqual(this.props.initialProps, props.initialProps)) {
      if(load) {
        startLoading()
        load().then(stopLoading())
      }
    }
  }

  render () {
    const { Component, setProps, initialProps, ui = {} } = this.props
    const { loading = false, error = null, props ={} } = ui

    return (
      <Component
        setProps={setProps}
        loading={loading}
        error={error}
        {...initialProps}
        {...props}
      />
    )
  }
}

const mapStateToProps = (state, { name }) => ({
  ui: state.getIn(['ui', 'ui', name])
})

const mapDispatchToProps = (dispatch, { name }) => ({
  setProps: props => dispatch(setProps({ name, props })),
  create: () => dispatch(createUI({ name })),
  startLoading: () => dispatch(startLoading({ name })),
  stopLoading: () => dispatch(stopLoading({ name }))
})

const ConnectedUIWrapper =
  connect(mapStateToProps, mapDispatchToProps)(UIWrapper)

export default ({ name = '', load = null, props = {} }) => Component =>
  <ConnectedUIWrapper
    name={name}
    Component={Component}
    load={load}
    initialProps={props}
  />
