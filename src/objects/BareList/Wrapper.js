import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName, buildBreakpointValues } from '../../utils/'
import { NAMESPACE, LIST_SPACING, BLOCK_TAGS } from '../../constants'

const BareListWrapper = ({ tag, spacing, className, children, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        `${NAMESPACE}o-bare-list`,
        spacing
          ? buildClassName(`${NAMESPACE}o-bare-list--spaced-`, spacing)
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

BareListWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  spacing: propTypeSpacing,
  className: T.string,
  children: T.node
}

export default BareListWrapper
