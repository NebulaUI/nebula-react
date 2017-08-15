import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-flyout-content'

const Flyout = ({ node, className, direction, children, handleClick, ...rest }) =>
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
  direction: T.oneOf([
    'ne',
    'se',
    'sw',
    'nw'
  ]),
  handleClick: T.func.isRequired,
  children: T.node.isRequired
}
