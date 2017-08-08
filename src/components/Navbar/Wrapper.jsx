import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'


const NavbarWrapper = ({ className, children, ...rest }) => (
  <div className={classNames('c-navbar', className)} {...rest}>
    {children}
  </div>
)

NavbarWrapper.propTypes = {
  children: T.node.isRequired,
  className: T.string
}

export default NavbarWrapper
