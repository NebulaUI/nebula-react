import { createElement as E } from 'react'
import T from 'prop-types'

import { NAMESPACE, GRID_GUTTERS, BLOCK_TAGS } from '../../constants'
import { classNames, buildClassName, buildBreakpointValues } from '../../utils/'

const GridWrapper = ({
  tag,
  gutter,
  matrix,
  equalHeight,
  reverse,
  align,
  className,
  children,
  ...rest
}) =>
  E(
    tag || 'div',
    {
      className: classNames(
        `${NAMESPACE}o-grid`,
        gutter
          ? buildClassName(`${NAMESPACE}o-grid--gutter-`, gutter)
          : null,
        { [`${NAMESPACE}o-grid--matrix`]: matrix },
        { [`${NAMESPACE}o-grid--equal-height`]: equalHeight },
        { [`${NAMESPACE}o-grid--reverse`]: reverse },
        align ? `${NAMESPACE}o-grid--${align}` : null,
        className
      ),
      ...rest
    },
    children
  )

const gutterSizes = buildBreakpointValues(GRID_GUTTERS)

const propTypeGutter = T.oneOfType([
  T.oneOf(gutterSizes),
  T.arrayOf(T.oneOf(gutterSizes))
])

GridWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  gutter: propTypeGutter,
  matrix: T.bool,
  equalHeight: T.bool,
  reverse: T.bool,
  align: T.oneOf(['center', 'bottom']),
  className: T.string,
  children: T.node
}

export default GridWrapper
