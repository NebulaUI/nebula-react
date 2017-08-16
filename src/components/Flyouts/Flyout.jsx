import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-flyout-content'

const Flyout = ({ node, className, children, isOpen, direction, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(initial, `${initial}--${direction}`, className),
      ...rest
    },
    children
  )

Flyout.propTypes = {
  node: T.string,
  className: T.string,
  isOpen: T.bool,
  direction: T.shape({
    ne: true,
    se: false,
    sw: false,
    nw: false
  }),
  children: T.node.isRequired
}

export default Flyout
