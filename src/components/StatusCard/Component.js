import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

const StatusCardComponent = ({ status, tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-status-card__component`, className),
      ...rest
    },
    children && E(
      'span',
      {},
      children
    )
  )

StatusCardComponent.propTypes = {
  tag: T.oneOf(ALL_TAGS),
  className: T.string,
  children: T.node
}

export default StatusCardComponent
