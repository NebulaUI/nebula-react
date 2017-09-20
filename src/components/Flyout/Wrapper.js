import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { ClickOutside } from '../../'
import { classNames } from '../../utils'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

class FlyoutWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.isInitialOpen(),
      openingEl: null
    }
  }

  getChildContext = () => ({
    handleFlyoutToggle: this.handleToggle,
    isFlyoutOpen: this.isOpen(),
    flyoutDisabled: this.props.disabled
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

  isInitialOpen = () => {
    if (this.props.disabled) {
      return false
    }

    return this.isControlled()
      ? this.props.isOpen === 'open'
      : this.props.defaultOpen === 'open'
  }

  isOpen = () => {
    if (this.props.disabled) {
      return false
    }

    return this.isControlled()
      ? this.props.isOpen === 'open'
      : this.state.isOpen
  }

  render() {
    const {
      defaultOpen, isOpen, onFlyoutChange,
      tag, className, children, clickOutsideToClose, ...rest
    } = this.props
    const FlyoutComponent = E(
      tag || 'div',
      {
        className: classNames(`${NAMESPACE}c-flyout`, { 'is-open': this.isOpen() }, className),
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
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired,
  onFlyoutChange: T.func,
  isOpen: T.oneOf(['open', 'closed']),
  clickOutsideToClose: T.bool,
  defaultOpen: T.oneOf(['open', 'closed']),
  disabled: T.bool
}

FlyoutWrapper.childContextTypes = {
  handleFlyoutToggle: T.func.isRequired,
  isFlyoutOpen: T.bool.isRequired,
  flyoutDisabled: T.bool
}

export default FlyoutWrapper
