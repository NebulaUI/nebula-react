import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName, buildBreakpointValues } from '../../utils/index'
import { BLOCK_TAGS, LIST_SPACING } from '../../constants'

const UIListWrapper = ({ tag, spacing, className, children, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        'c-ui-list',
        spacing
          ? buildClassName('c-ui-list--spaced-', spacing)
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
