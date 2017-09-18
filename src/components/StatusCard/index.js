import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { STATUSES, BLOCK_TAGS } from '../../constants'

const initial = 'c-status-card'

const StatusCard = ({ tag, status, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(initial, `${initial}--${status}`),
      ...rest
    },
    children
  )

StatusCard.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  status: T.oneOf(STATUSES).isRequired,
  children: T.node.isRequired
}

export { StatusCard }
