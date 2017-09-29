import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const TooltipWrapper = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'span',
    {
      role: 'tooltip',
      className: classNames(`${NAMESPACE}c-tooltip`, className),
      ...rest
    },
    children
  )

TooltipWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default TooltipWrapper
