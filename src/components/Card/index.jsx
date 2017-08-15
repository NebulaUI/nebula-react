import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Card = ({ node, className, status, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-card', {
        status: {
          warning: 'c-status-card--info',
          error: 'c-status-card--error',
          info: 'c-status-card--info',
          success: 'c-status-card--success'
        }
      }, className),
      ...rest },
    children
  )

Card.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node,
  status: T.shape({
    warning: T.string,
    error: T.string,
    info: T.string,
    success: T.string
  })
}
export { Card }
