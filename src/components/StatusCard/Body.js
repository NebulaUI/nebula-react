import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

const StatusCardBody = ({ status, tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-status-card__body`, className),
      ...rest
    },
    children
  )

StatusCardBody.propTypes = {
  tag: T.oneOf(ALL_TAGS),
  className: T.string,
  children: T.node
}

export default StatusCardBody
