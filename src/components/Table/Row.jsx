import React, { cloneElement } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { NAMESPACE } from '../../constants'
import Cell from './Cell'

const TableRow = ({ children, className, ...rest }) => {
  const enhancedChildren = React.Children.map(children, (child, index) => {
    if (child.type === Cell) {
      return cloneElement(child, { index })
    }

    // eslint-disable-next-line no-console
    return console.warn(`${child} is not a valid child of TableRow, expected TableCell`)
  })

  return (
    <tr
      className={classNames(`${NAMESPACE}c-table__row`, className)}
      {...rest}
    >
      { enhancedChildren }
    </tr>
  )
}

TableRow.propTypes = {
  children: T.node.isRequired,
  className: T.string
}

export default TableRow
