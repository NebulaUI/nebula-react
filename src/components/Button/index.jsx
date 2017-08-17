import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Button = ({ node, to, color, size, type, className, children, ...rest }) =>
  E(
    node || 'button',
    {
      type,
      href: to,
      className: classNames(
        'c-btn', className,
        { 'c-btn--alpha': color },
        { 'c-btn--md': size },
      ),
      ...rest
    },
    children
  )


Button.propTypes = {
  node: T.string,
  type: T.string,
  to: T.string,
  size: T.string,
  color: T.string,
  className: T.string,
  children: T.node.isRequired
}

export { Button }
