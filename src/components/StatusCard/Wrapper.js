import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS, STATUSES } from '../../constants'

const StatusCardWrapper = ({ status, tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(
        `${NAMESPACE}c-status-card`,
        `${NAMESPACE}c-status-card--${status}`,
        className
      ),
      ...rest
    },
    children
  )

StatusCardWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  status: T.oneOf(STATUSES),
  children: T.node.isRequired
}

export default StatusCardWrapper
