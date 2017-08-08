import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import buildClassName from '../../utils/buildClassName'

const GridItem = ({
  node,
  width,
  push,
  pull,
  className,
  children,
  ...rest
}) =>
  E(
    node || 'div',
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

const propTypeFraction = T.oneOfType([
  T.string,
  T.array
])

GridItem.propTypes = {
  node: T.string,
  width: propTypeFraction,
  push: propTypeFraction,
  pull: propTypeFraction,
  className: T.string,
  children: T.node
}

export default GridItem
