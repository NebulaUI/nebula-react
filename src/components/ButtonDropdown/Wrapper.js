import { createElement as E, Component } from 'react'
import T from 'prop-types'

import { ClickOutside } from '../../'
import { classNames } from '../../utils/'

class ButtonDropdownWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.isInitialOpen(),
      openingEl: null
    }
  }

  getChildContext = () => ({
    handleButtonDropdownToggle: this.handleToggle,
    isButtonDropdownOpen: this.isOpen()
  })

  handleToggle = (e) => { // eslint-disable-line consistent-return
    if (this.props.onButtonDropdownChange) {
      this.props.onButtonDropdownChange(this.isOpen())
    }

    if (!this.isControlled()) {
      if (this.state.isOpen) {
        return this.close()
      }

      this.open(e)
    }
  }

  handleClickOutside = () => {
    if (this.props.onButtonDropdownChange && this.isOpen()) {
      this.props.onButtonDropdownChange(this.isOpen())
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
    if (this.state.openingEl) {
      this.state.openingEl.focus()
    }
    this.setState({
      isOpen: false
    })
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
      defaultOpen, isOpen, onButtonDropdownChange,
      node,
      className,
      children,
      togglePosition,
      fullWidth,
      clickOutsideToClose,
      ...rest
    } = this.props
    const FlyoutComponent = E(
      node || 'div',
      {
        className: classNames(
          'c-btn-dropdown',
          `c-btn-dropdown--toggle-${togglePosition}`,
          { 'c-btn-dropdown--full': fullWidth },
          { 'is-open': this.isOpen() },
          className
        ),
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

ButtonDropdownWrapper.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired,
  fullWidth: T.bool,
  togglePosition: T.oneOf(['left', 'right']).isRequired,
  defaultOpen: T.oneOf(['open', 'closed']),
  isOpen: T.oneOf(['open', 'closed']),
  clickOutsideToClose: T.bool,
  onButtonDropdownChange: T.func
}

ButtonDropdownWrapper.childContextTypes = {
  handleButtonDropdownToggle: T.func.isRequired,
  isButtonDropdownOpen: T.bool.isRequired
}

export default ButtonDropdownWrapper
