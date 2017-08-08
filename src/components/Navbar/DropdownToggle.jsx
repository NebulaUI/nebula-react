import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const NavbarDropdownToggle = ({ handleToggle, children, className, ...rest }) => (
  <button
    className={classNames('c-navbar__dropdown-toggle', className)}
    onClick={handleToggle}
    {...rest}
  >
    {children}
  </button>
)

NavbarDropdownToggle.propTypes = {
  handleToggle: T.func,
  className: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownToggle
