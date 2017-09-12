import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

class NavbarDropdownWrapper extends Component {
  getChildContext = () => ({
    navbarClickOutsideToClose: this.props.clickOutsideToClose
  })

  render() {
    const {
      clickOutsideToClose,
      tag, children, className, ...rest
    } = this.props
    return E(
      tag || 'li',
      {
        className: classNames('c-navbar__item', className),
        ...rest
      },
      children
    )
  }
}

NavbarDropdownWrapper.childContextTypes = {
  navbarClickOutsideToClose: T.bool
}

NavbarDropdownWrapper.propTypes = {
  className: T.string,
  tag: T.string,
  clickOutsideToClose: T.bool,
  children: T.node.isRequired
}

export default NavbarDropdownWrapper
