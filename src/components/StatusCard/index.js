import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, STATUSES, BLOCK_TAGS } from '../../constants'

const initial = `${NAMESPACE}c-status-card`

const StatusCard = ({ tag, status, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(initial, `${initial}--${status}`, className),
      ...rest
    },
    children
  )

StatusCard.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  status: T.oneOf(STATUSES).isRequired,
  children: T.node.isRequired
}

export { StatusCard }
