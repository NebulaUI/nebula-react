import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'

const MatrixListItem = ({ node, className, children }) =>
  E(
    node || 'li',
    { className: classNames('o-matrix-list__item', className) },
    children
  )

MatrixListItem.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default MatrixListItem
