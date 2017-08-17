import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-status-card'

const StatusCard = ({ className, node, status, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(initial, status ? `${initial}--${status}` : '', className),
      ...rest
    },
    children
  )

StatusCard.propTypes = {
  node: T.string,
  className: T.string,
  status: T.oneOf([
    'success',
    'info',
    'warning',
    'error'
  ]),
  children: T.node.isRequired
}

export { StatusCard }
