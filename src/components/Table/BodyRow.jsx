import React from 'react'
import T from 'prop-types'

import Cell from './BodyCell'

const BodyRow = ({ row }) => (
  <tr className="c-table__row">
    { row.cells.map(c => <Cell key={c.id} cell={c} />)}
  </tr>
)

BodyRow.propTypes = {
  row: T.shape({
    cells: T.arrayOf(T.shape({
      id: T.string.isRequired
    }))
  })
}

export default BodyRow
