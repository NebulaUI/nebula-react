import React, { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

import Toggle from './Toggle'

const FoldableHeader = ({ toggleOpen, node, className, children, ...rest }) => {
  const enhancedChildren = React.Children.map(children, child => (
    child.type === Toggle
      ? React.cloneElement(child, { toggleOpen })
      : child
  ))

  return E(
    node || 'div',
    {
      className: classNames('c-foldable__head', className),
      ...rest
    },
    enhancedChildren
  )
}

FoldableHeader.propTypes = {
  toggleOpen: T.func,
  node: T.string,
  className: T.string,
  children: T.node
}

export default FoldableHeader
