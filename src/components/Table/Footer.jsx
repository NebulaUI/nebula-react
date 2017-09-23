import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const TableFooter = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(
        `${NAMESPACE}c-table__footer`,
        className
      ),
      ...rest
    },
    children
  )

TableFooter.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  classNAme: T.string,
  children: T.node.isRequired
}

export default TableFooter
