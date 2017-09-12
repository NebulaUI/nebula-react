import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { ClickOutside } from '../../'

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
    const { tag, children, className, ...rest } = this.props
    const Comp = E(
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
    return this.context.navbarClickOutsideToClose
      ? E(
        ClickOutside,
        { onClickOutside: this.handleClickOutside },
        Comp
      ) : Comp
  }
}

NavbarDropdownToggle.contextTypes = {
  navbarClickOutsideToClose: T.bool
}

NavbarDropdownToggle.propTypes = {
  className: T.string,
  tag: T.string,
  clickOutsideToClose: T.bool,
  children: T.node.isRequired
}

export default NavbarDropdownToggle
