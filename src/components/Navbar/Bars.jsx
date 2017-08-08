import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const NavbarToggleBars = ({ children, className, ...rest }) => (
  <span className={classNames('c-navbar__toggle-bars', className)} {...rest}>
    {children}
  </span>
)

NavbarToggleBars.propTypes = {
  children: T.node,
  className: T.string
}

export default NavbarToggleBars
