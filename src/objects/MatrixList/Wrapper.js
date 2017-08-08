import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName } from '../../utils/'

const MatrixListWrapper = ({ node, spacing, className, children, ...rest }) =>
  E(
    node || 'ul',
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

MatrixListWrapper.propTypes = {
  node: T.string,
  spacing: T.oneOfType([
    T.string,
    T.array
  ]),
  className: T.string,
  children: T.node
}

export default MatrixListWrapper