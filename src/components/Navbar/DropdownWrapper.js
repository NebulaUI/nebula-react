import React, { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { ClickOutside } from '../../'
import DropdownContent from './DropdownContent'

class NavbarDropdownWrapper extends Component {
  state = { isOpen: false }

  getChildContext = () => ({ navbarDropdownToggleOpen: this.toggleOpen })

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })
  close = () => this.setState({ isOpen: false })

  render() {
    const { clickOutsideToClose, tag, children, className, ...rest } = this.props
    const { isOpen } = this.state
    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === DropdownContent) {
        return isOpen ? child : null
      }

      return child
    })
    const Comp = E(
      tag || 'li',
      {
        className: classNames(
          'c-navbar__item', className,
          { 'is-open': isOpen }
        ),
        'aria-haspopup': true,
        'aria-expanded': isOpen,
        ...rest
      },
      enhancedChildren
    )
    return clickOutsideToClose
    ? E(
        ClickOutside,
        { onClickOutside: this.close },
        Comp
      )
    : Comp
  }
}

NavbarDropdownWrapper.childContextTypes = {
  navbarDropdownToggleOpen: T.func.isRequired
}

NavbarDropdownWrapper.propTypes = {
  className: T.string,
  tag: T.string,
  clickOutsideToClose: T.bool,
  children: T.node.isRequired
}

export default NavbarDropdownWrapper
