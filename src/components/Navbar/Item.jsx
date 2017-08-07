import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const NavbarItem = ({ children, className }) => (
  <li className={classNames('c-navbar__item', className)}>
    {children}
  </li>
)

NavbarItem.propTypes = {
  children: T.node.isRequired,
  className: T.string
}

export default NavbarItem
