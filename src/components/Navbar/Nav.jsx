import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const NavbarNav = ({ children, className }) => (
  <ul className={classNames('c-navbar__nav', className)}>
    {children}
  </ul>
)

NavbarNav.propTypes = {
  children: T.node.isRequired,
  className: T.string
}

export default NavbarNav
