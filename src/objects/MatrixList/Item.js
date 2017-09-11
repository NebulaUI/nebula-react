import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const MatrixListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames('o-matrix-list__item', className), ...rest },
    children
  )

MatrixListItem.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node
}

export default MatrixListItem
