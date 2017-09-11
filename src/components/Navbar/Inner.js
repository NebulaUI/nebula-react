import React, { createElement as E } from 'react'
import T from 'prop-types'
import { classNames, removeFalsy } from '../../utils/'

import ToggleWrapper from './ToggleWrapper'

const NavbarInner = ({ tag, handleToggle, children, className, ...rest }) => {
  const enhancedChildren = React.Children.map(removeFalsy(children), (child) => {
    if (child.type === ToggleWrapper) {
      return React.cloneElement(child, {
        handleToggle
      })
    }
    return child
  })
  return E(
    tag || 'nav',
    {
      className: classNames('c-navbar__wrap', className),
      ...rest
    },
    enhancedChildren
  )
}

NavbarInner.propTypes = {
  handleToggle: T.func,
  tag: T.string,
  children: T.node.isRequired,
  className: T.string
}

export default NavbarInner
