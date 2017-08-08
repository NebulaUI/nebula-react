import React from 'react'
import T from 'prop-types'
import { classNames, removeFalsy } from '../../utils/'

import ToggleWrapper from './ToggleWrapper'

const NavbarWrap = ({ handleToggle, children, className, ...rest }) => {
  const enhancedChildren = React.Children.map(removeFalsy(children), (child) => {
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

NavbarWrap.propTypes = {
  handleToggle: T.func,
  children: T.node.isRequired,
  className: T.string
}

export default NavbarWrap
