import * as React from 'react'
import ConfirmButton from 'app/components/ConfirmButton'

interface IProps extends React.Props<{}> {
  onConfirm?: ()=>void
  onReject?: ()=>void
  className?: string
  message?: string
}

class ConfirmButtonContainer extends React.Component<IProps, any> {
  constructor (props) {
    super(props)

    this.state = { shouldShowConfirmDialogue: false }
    this.toggleConfirmDialogue = this.toggleConfirmDialogue.bind(this)
  }

  public static defaultProps:IProps = {
    onConfirm: () => {},
    onReject: () => {}
  }

  toggleConfirmDialogue () {
    this.setState({
      shouldShowConfirmDialogue: !this.state.shouldShowConfirmDialogue
    })
  }

  render () {
    return (
      <ConfirmButton
        message = ''
        {...this.props}
        {...this.state}
        onClick={this.toggleConfirmDialogue}
        onConfirm={() => {
          this.toggleConfirmDialogue()
          this.props.onConfirm()
        }}
        onReject={() => {
          this.toggleConfirmDialogue()
          this.props.onReject()
        }}
      >
        {this.props.children}
      </ ConfirmButton>
    )
  }
}


export default ConfirmButtonContainer
