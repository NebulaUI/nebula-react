import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'

const MatrixListItem = ({ node, className, children, ...rest }) =>
  E(
    node || 'li',
    { className: classNames('o-matrix-list__item', className), ...rest },
    children
  )

MatrixListItem.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default MatrixListItem
