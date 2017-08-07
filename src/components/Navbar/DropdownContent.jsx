import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const NavbarDropdownContent = ({ children, className }) => (
  <ul className={classNames('c-navbar__dropdown', className)}>
    {children}
  </ul>
)

NavbarDropdownContent.propTypes = {
  className: T.string,
  children: T.node.isRequired,
}

export default NavbarDropdownContent