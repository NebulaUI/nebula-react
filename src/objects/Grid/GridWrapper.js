import { createElement as E } from 'react'
import T from 'prop-types'

import { GUTTER_SIZES } from './constants'
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
        'o-grid',
        gutter
          ? buildClassName('o-grid--gutter-', gutter)
          : null,
        { 'o-grid--matrix': matrix },
        { 'o-grid--equal-height': equalHeight },
        { 'o-grid--reverse': reverse },
        align ? `o-grid--${align}` : null,
        className
      ),
      ...rest
    },
    children
  )

const gutterSizes = buildBreakpointValues(GUTTER_SIZES)

const propTypeGutter = T.oneOfType([
  T.oneOf(gutterSizes),
  T.arrayOf(T.oneOf(gutterSizes))
])

GridWrapper.propTypes = {
  tag: T.string,
  gutter: propTypeGutter,
  matrix: T.bool,
  equalHeight: T.bool,
  reverse: T.bool,
  align: T.oneOf(['center', 'bottom']),
  className: T.string,
  children: T.node
}

export default GridWrapper
