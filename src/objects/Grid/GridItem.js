import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName } from '../../utils/'

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

const propTypeFraction = T.oneOfType([
  T.string,
  T.array
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
