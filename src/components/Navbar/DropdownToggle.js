import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { ClickOutside } from '../../'

const noop = () => {}

class NavbarDropdownToggle extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  handleClick = () =>
    this.setState({
      isOpen: !this.state.isOpen
    })


  handleClickOutside = () => {
    this.setState({ isOpen: false })
  }
  render() {
    const { tag, clickOutsideToClose = true, children, className, ...rest } = this.props
    return E(
      ClickOutside,
      {
        onClickOutside: clickOutsideToClose
          ? this.handleClickOutside
          : noop
      },
      E(
        tag || 'button',
        {
          onClick: this.handleClick,
          className: classNames(
            'c-navbar__dropdown-toggle', className,
            { 'is-open': this.state.isOpen }
          ),
          ...rest
        },
        children
      )
    )
  }
}

NavbarDropdownToggle.propTypes = {
  className: T.string,
  tag: T.string,
  clickOutsideToClose: T.bool,
  children: T.node.isRequired
}

export default NavbarDropdownToggle
