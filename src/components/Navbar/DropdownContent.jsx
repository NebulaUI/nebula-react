import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const NavbarDropdownContent = ({ children, className, ...rest }) => (
  <ul className={classNames('c-navbar__dropdown', className)} {...rest}>
    {children}
  </ul>
)

NavbarDropdownContent.propTypes = {
  className: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownContent
