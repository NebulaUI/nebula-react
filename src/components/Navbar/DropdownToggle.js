import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

const NavbarDropdownToggle = ({
  tag,
  children,
  className,
  ...rest
}, {
  navbarDropdownToggleOpen
}) =>
  E(
    tag || 'button',
    {
      onClick: navbarDropdownToggleOpen,
      className: classNames('c-navbar__dropdown-toggle', className),
      ...rest
    },
    children
  )

NavbarDropdownToggle.contextTypes = {
  navbarDropdownToggleOpen: T.func.isRequired
}

NavbarDropdownToggle.propTypes = {
  className: T.string,
  tag: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownToggle
