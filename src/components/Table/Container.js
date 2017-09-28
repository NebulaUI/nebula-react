import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const TableContainer = ({ tag, children, className, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-table-container`, className),
      ...rest
    },
    children
  )

TableContainer.propTypes = {
  className: T.string,
  children: T.node.isRequired,
  tag: T.oneOf(BLOCK_TAGS)
}

export default TableContainer
