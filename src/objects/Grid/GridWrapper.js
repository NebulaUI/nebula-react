import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import buildClassName from '../../utils/buildClassName'

const GridWrapper = ({
  node,
  gutter,
  matrix,
  equalHeight,
  reverse,
  align,
  className,
  children
}) =>
  E(
    node || 'div',
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
      )
    },
    children
  )

GridWrapper.propTypes = {
  node: T.string,
  gutter: T.oneOfType([
    T.string,
    T.array
  ]),
  matrix: T.bool,
  equalHeight: T.bool,
  reverse: T.bool,
  align: T.string,
  className: T.string,
  children: T.node
}

export default GridWrapper
