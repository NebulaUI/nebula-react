import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Card = ({ node, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(className || 'c-card'),
      ...rest
    },
    children
  )

Card.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export { Card }
