import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import buildClassName from '../../utils/buildClassName'

const MatrixListWrapper = ({ node, spacing, className, children }) =>
  E(
    node || 'ul',
    {
      className: classNames(
        'o-matrix-list',
        spacing
          ? buildClassName('o-matrix-list-', spacing)
          : null,
        className
      )
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
