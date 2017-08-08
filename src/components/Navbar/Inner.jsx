import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

import ToggleWrapper from './ToggleWrapper'

const NavbarInner = ({ handleToggle, children, className, ...rest }) => {
  const enhancedChildren = React.Children.map(children, (child) => {
    if (child.type === ToggleWrapper) {
      return React.cloneElement(child, {
        handleToggle
      })
    }
    return child
  })
  return (
    <nav className={classNames('c-navbar__wrap', className)} {...rest}>
      {enhancedChildren}
    </nav>
  )
}

NavbarInner.propTypes = {
  handleToggle: T.func,
  children: T.node.isRequired,
  className: T.string
}

export default NavbarInner
