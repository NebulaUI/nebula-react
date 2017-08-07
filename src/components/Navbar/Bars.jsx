import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const NavbarToggleBars = ({ children, className }) => (
  <span className={classNames('c-navbar__toggle-bars', className)}>
    {children}
  </span>
)

NavbarToggleBars.propTypes = {
  children: T.node,
  className: T.string
}

export default NavbarToggleBars
