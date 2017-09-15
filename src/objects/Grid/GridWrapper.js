import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName } from '../../utils/'

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

const gutterSizes = ['sm', 'md', 'lg']
const breakpoints = ['xs', 'sm', 'md', 'lg']

const buildGutterBreakpoints = () =>
breakpoints.map(bp =>
  gutterSizes.map(gt => `${gt}@${bp}`))
    .reduce((item, acc) => acc.concat(item, []))

const buildGutterValues = () => ([
  ...gutterSizes,
  ...buildGutterBreakpoints()
])

GridWrapper.propTypes = {
  tag: T.string,
  gutter: T.oneOfType([
    T.oneOf(gutterSizes),
    T.arrayOf(T.oneOf(buildGutterValues()))
  ]),
  matrix: T.bool,
  equalHeight: T.bool,
  reverse: T.bool,
  align: T.string,
  className: T.string,
  children: T.node
}

export default GridWrapper
