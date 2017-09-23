import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { NAMESPACE } from '../../constants'

const TableCell = ({ index, label, children, className, ...rest }, { tableColumnTitles }) => (
  <td
    className={classNames(`${NAMESPACE}c-table__cell`, className)}
    data-label={label || (tableColumnTitles && tableColumnTitles[index])}
    {...rest}
  >
    { children }
  </td>
)

TableCell.contextTypes = {
  tableColumnTitles: T.arrayOf(T.string).isRequired
}

TableCell.propTypes = {
  children: T.node.isRequired,
  label: T.string,
  index: T.number,
  className: T.string
}

export default TableCell
