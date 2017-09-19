import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName, buildBreakpointValues } from '../../utils/index'
import { NAMESPACE, BLOCK_TAGS, LIST_SPACING } from '../../constants'

const UIListWrapper = ({ tag, spacing, className, children, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        `${NAMESPACE}c-ui-list`,
        spacing
          ? buildClassName(`${NAMESPACE}c-ui-list--spaced-`, spacing)
          : null,
        className
      ),
      ...rest
    },
    children
  )

const spacing = buildBreakpointValues(LIST_SPACING)

const propTypeSpacing = T.oneOfType([
  T.oneOf(spacing),
  T.arrayOf(T.oneOf(spacing))
])

UIListWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  spacing: propTypeSpacing,
  className: T.string,
  children: T.node.isRequired
}

export default UIListWrapper
