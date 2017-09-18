import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { BLOCK_TAGS } from '../../constants'

const PaginationItem = ({
  tag,
  children,
  className,
  ...rest }) =>
  E(
    tag || 'li',
    {
      className: classNames('c-pagination__item', className),
      ...rest
    },
    children
  )

PaginationItem.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default PaginationItem
