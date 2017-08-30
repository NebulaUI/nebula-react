import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-flyout__content'

const Content = ({ node, isOpen, className, children, direction, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(initial, direction ? `${initial}--${direction}` : '', className),
      ...rest
    },
    isOpen && children
  )

Content.propTypes = {
  node: T.string,
  className: T.string,
  direction: T.oneOf(['nw', 'ne', 'sw', 'se']),
  children: T.node.isRequired,
  isOpen: T.bool
}

export default Content
