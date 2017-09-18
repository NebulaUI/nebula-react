import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName, buildBreakpointValues } from '../../utils/'
import { LIST_SPACING, BLOCK_TAGS } from '../../constants'

const MatrixListWrapper = ({ tag, spacing, className, children, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        'o-matrix-list',
        spacing
          ? buildClassName('o-matrix-list-', spacing)
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

MatrixListWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  spacing: propTypeSpacing,
  className: T.string,
  children: T.node
}

export default MatrixListWrapper
