import React, { cloneElement } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { NAMESPACE } from '../../constants'

import TableHeaderCell from './HeaderCell'

const TableHeaderRow = ({ children, className, ...rest }) => {
  const enhancedChildren = React.Children.map(children, (child, index) => {
    if (child.type === TableHeaderCell) {
      return cloneElement(child, { index })
    }

    // eslint-disable-next-line no-console
    return console.warn(`${child} is not a valid child of TableHeaderRow, expected TableHeaderCell`)
  })

  return (
    <tr
      className={classNames(
        `${NAMESPACE}c-table__row`,
        `${NAMESPACE}c-table__header-row`,
        className
      )}
      {...rest}
    >
      { enhancedChildren }
    </tr>
  )
}

TableHeaderRow.propTypes = {
  children: T.node.isRequired,
  className: T.string
}

export default TableHeaderRow
