import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { ALL_TAGS } from '../../constants'

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
  tag: T.oneOf(ALL_TAGS),
  children: T.node.isRequired
}

export default NavbarDropdownToggle
