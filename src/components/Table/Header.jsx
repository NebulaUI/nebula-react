import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { NAMESPACE } from '../../constants'

const TableHeader = ({ hoverRowHighlight, children, className, ...rest }, { tableSortedBy }) => (
  <thead
    className={classNames(
      `${NAMESPACE}c-table__header`,
      hoverRowHighlight ? `${NAMESPACE}c-table__header--hover-row-highlight` : '',
      className
    )}
    aria-label={tableSortedBy.index !== -1 && 'Sorted by'}
    {...rest}
  >
    { children }
  </thead>
)

TableHeader.contextTypes = {
  tableSortedBy: T.shape({
    index: T.number
  }).isRequired
}

TableHeader.propTypes = {
  hoverRowHighlight: T.bool,
  children: T.node.isRequired,
  className: T.string
}

export default TableHeader
