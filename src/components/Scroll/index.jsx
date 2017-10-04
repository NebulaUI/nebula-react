import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const Scroll = ({ tag, maxWidth, maxHeight, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-scroll`, className),
      style: {
        maxWidth,
        maxHeight
      },
      ...rest
    },
    children
  )

Scroll.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  maxWidth: T.string,
  maxHeight: T.string,
  children: T.node.isRequired
}

export { Scroll }
