import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const Card = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-card`, className),
      ...rest
    },
    children
  )

Card.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node
}

export { Card }
