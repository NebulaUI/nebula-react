import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

// eslint-disable-next-line react/prefer-stateless-function
const FlyoutContent = ({ node, className, children, ...rest }, { isOpen, direction }) =>
  E(
    node || 'div',
    {
      className: classNames('c-flyout__content', direction ? `c-flyout__content--${direction}` : '', className),
      ...rest
    },
    isOpen && children
  )

FlyoutContent.contextTypes = {
  isOpen: T.bool,
  direction: T.oneOf(['nw', 'ne', 'sw', 'se'])
}

FlyoutContent.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default FlyoutContent
