import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { ClickOutside } from '../../'

import { classNames } from '../../utils'

class FlyoutWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.isControlled()
        ? this.props.isOpen === 'open'
        : this.props.defaultOpen === 'open'
    }
  }

  getChildContext = () => ({
    handleToggle: this.toggleOpen,
    isOpen: this.props.isOpen || this.state.isOpen
  })

  toggleOpen = () => {
    if (this.props.handleFlyoutChange && !this.props.isOpen) {
      this.props.handleFlyoutChange(this.props.isOpen || this.state.isOpen)
    }
    if (!this.isControlled()) {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  close = () => {
    if (this.props.handleFlyoutChange) {
      this.props.handleFlyoutChange(this.props.isOpen || this.state.isOpen)
    }
    if (!this.isControlled()) {
      this.setState({
        isOpen: false
      })
    }
  }

  isControlled = () => !!this.props.isOpen

  render() {
    const {
      defaultOpen, isOpen, handleFlyoutChange,
      node, className, children, ...rest
    } = this.props
    const open = isOpen || this.state.isOpen
    return E(
      ClickOutside,
      {
        onClickOutside: this.close
      },
      E(
        node || 'div',
        {
          className: classNames('c-flyout', { 'is-open': open }, className),
          'aria-haspopup': true,
          'aria-expanded': open,
          ...rest
        },
        children
      )
    )
  }
}

FlyoutWrapper.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired,
  handleFlyoutChange: T.func,
  isOpen: T.oneOf(['open', 'closed']),
  defaultOpen: T.oneOf(['open', 'closed'])
}

FlyoutWrapper.childContextTypes = {
  handleToggle: T.func,
  isOpen: T.bool
}

export default FlyoutWrapper
