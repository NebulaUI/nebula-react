import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames, buildClassName, buildBreakpointValues } from '../../utils/'

import { NAMESPACE, LIST_SPACING, BLOCK_TAGS } from '../../constants'

const LinkListWrapper = ({ tag, spacing, className, children, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        `${NAMESPACE}c-link-list`,
        spacing
          ? buildClassName(`${NAMESPACE}c-link-list--spaced-`, spacing)
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

LinkListWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  spacing: propTypeSpacing,
  className: T.string,
  children: T.node.isRequired
}

export default LinkListWrapper
