import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const PaginationItem = ({
  node,
  children,
  className,
  ...rest }) =>
  E(
    node || 'li',
    {
      className: classNames('c-pagination__item', className),
      ...rest
    },
    children
  )

PaginationItem.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default PaginationItem
