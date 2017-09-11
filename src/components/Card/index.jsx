import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Card = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames('c-card', className),
      ...rest
    },
    children
  )

Card.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node
}

export { Card }
