import React from 'react'
import T from 'prop-types'

import Cell from './BodyCell'

const BodyRow = ({ cells }) => (
  <tr className="c-table__row">
    { cells.map(cell => <Cell key={cell.id} data={cell.value} />) }
  </tr>
)

BodyRow.propTypes = {
  cells: T.arrayOf(T.any)
}

export default BodyRow
