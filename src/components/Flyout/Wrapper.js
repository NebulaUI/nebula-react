import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { ClickOutside } from '../../'

import { classNames } from '../../utils'

class FlyoutWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.isInitialOpen(),
      openingEl: null
    }
  }

  getChildContext = () => ({
    handleToggle: this.handleToggle,
    isOpen: this.isOpen(),
    direction: this.props.direction
  })

  handleToggle = (e) => { // eslint-disable-line consistent-return
    if (this.props.onFlyoutChange) {
      this.props.onFlyoutChange(this.isOpen())
    }

    if (!this.isControlled()) {
      if (this.state.isOpen) {
        return this.close()
      }

      this.open(e)
    }
  }

  handleClickOutside = () => {
    if (this.props.onFlyoutChange && this.isOpen()) {
      this.props.onFlyoutChange(this.isOpen())
    }
    if (!this.isControlled() && this.isOpen()) {
      this.close()
    }
  }

  open = ({ target }) => {
    this.setState({
      isOpen: true,
      openingEl: target
    })
  }

  close = () => {
    this.setState({
      isOpen: false
    })

    if (this.state.openingEl) {
      this.state.openingEl.focus()
    }
  }

  isControlled = () => !!this.props.isOpen

  isInitialOpen = () => (this.isControlled()
  ? this.props.isOpen === 'open'
  : this.props.defaultOpen === 'open')

  isOpen = () => (this.isControlled()
    ? this.props.isOpen === 'open'
    : this.state.isOpen)

  render() {
    const {
      defaultOpen, isOpen, onFlyoutChange,
      node, className, children, clickOutsideToClose, ...rest
    } = this.props
    const FlyoutComponent = E(
      node || 'div',
      {
        className: classNames('c-flyout', { 'is-open': this.isOpen() }, className),
        'aria-haspopup': true,
        'aria-expanded': this.isOpen(),
        ...rest
      },
      children
    )
    if (clickOutsideToClose) {
      return E(
        ClickOutside,
        { onClickOutside: this.handleClickOutside },
        FlyoutComponent
      )
    }

    return FlyoutComponent
  }
}

FlyoutWrapper.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired,
  onFlyoutChange: T.func,
  isOpen: T.oneOf(['open', 'closed']),
  clickOutsideToClose: T.bool,
  defaultOpen: T.oneOf(['open', 'closed']),
  direction: T.oneOf(['nw', 'ne', 'sw', 'se']).isRequired
}

FlyoutWrapper.childContextTypes = {
  handleToggle: T.func,
  isOpen: T.bool,
  direction: T.oneOf(['nw', 'ne', 'sw', 'se'])
}

export default FlyoutWrapper
