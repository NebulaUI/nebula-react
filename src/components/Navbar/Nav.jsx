import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const NavbarNav = ({ children, className, ...rest }) => (
  <ul className={classNames('c-navbar__nav', className)} {...rest}>
    {children}
  </ul>
)

NavbarNav.propTypes = {
  children: T.node.isRequired,
  className: T.string
}

export default NavbarNav
