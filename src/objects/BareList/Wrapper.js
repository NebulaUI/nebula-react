import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName, buildBreakpointValues } from '../../utils/'
import { LIST_SPACING } from '../../constants'

const BareListWrapper = ({ tag, spacing, className, children, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        'o-bare-list',
        spacing
          ? buildClassName('o-bare-list--spaced-', spacing)
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
  tag: T.string,
  spacing: propTypeSpacing,
  className: T.string,
  children: T.node
}

export default BareListWrapper
