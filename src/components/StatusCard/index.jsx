import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-status-card'

const StatusCard = ({ node, status, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(initial, `${initial}--${status}`),
      ...rest
    },
    children
  )

StatusCard.propTypes = {
  node: T.string,
  status: T.oneOf([
    'success',
    'info',
    'warning',
    'error'
  ]),
  children: T.node.isRequired
}

export { StatusCard }
