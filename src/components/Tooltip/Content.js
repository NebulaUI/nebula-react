import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS, TOOLTIP_DIRECTIONS } from '../../constants'

const TooltipContent = ({ tag, className, direction, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(
        `${NAMESPACE}c-tooltip__content`,
        `${NAMESPACE}c-tooltip__content--${direction}`,
        className
      ),
      ...rest
    },
    children
  )

TooltipContent.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired,
  direction: T.oneOf(TOOLTIP_DIRECTIONS).isRequired
}

export default TooltipContent
