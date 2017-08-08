import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

const NavbarDropdownWrapper = ({ children, className, ...rest }) => (
  <li
    className={classNames('c-navbar__item', className)}
    {...rest}
  >{children}</li>
)

NavbarDropdownWrapper.propTypes = {
  className: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownWrapper
