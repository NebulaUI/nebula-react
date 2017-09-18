import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { BLOCK_TAGS } from '../../constants'

const MatrixListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames('o-matrix-list__item', className), ...rest },
    children
  )

MatrixListItem.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node
}

export default MatrixListItem
