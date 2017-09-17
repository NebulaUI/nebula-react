import { createElement as E } from 'react'
import T from 'prop-types'

import { GRID_FRACTIONS } from '../../constants'
import { classNames, buildClassName, buildBreakpointValues } from '../../utils/'

const GridItem = ({
  tag,
  width,
  push,
  pull,
  className,
  children,
  ...rest
}) =>
  E(
    tag || 'div',
    {
      className: classNames(
        'o-grid__item',
        width
          ? buildClassName('u-', width)
          : null,
        push
          ? buildClassName('u-push-', push)
          : null,
        pull
          ? buildClassName('u-pull-', pull)
          : null,
        className
      ),
      ...rest
    },
    children
  )

const fractions = buildBreakpointValues(GRID_FRACTIONS)

const propTypeFraction = T.oneOfType([
  T.oneOf(fractions),
  T.arrayOf(T.oneOf(fractions))
])

GridItem.propTypes = {
  tag: T.string,
  width: propTypeFraction,
  push: propTypeFraction,
  pull: propTypeFraction,
  className: T.string,
  children: T.node
}

export default GridItem
