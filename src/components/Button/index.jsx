import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Button = ({ node, to, type, className, children, ...rest }) => (
  E(
    node || 'button',
    {
      type,
      href: to,
      className: classNames('c-btn', { color: 'c-btn--alpha', size: 'c-btn--md' }, className),
      ...rest
    },
    children
  )
)

Button.propTypes = {
  node: T.string,
  type: T.string,
  to: T.string,
  className: T.string,
  color: T.string,
  size: T.string,
  children: T.node.isRequired
}

export { Button }
