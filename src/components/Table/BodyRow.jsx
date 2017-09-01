import React from 'react'
import T from 'prop-types'

import Cell from './BodyCell'

const BodyRow = ({ row }) => (
  <tr className="c-table__row">
    { Object.keys(row).map(key => <Cell key={row[key]} data={row[key]} />) }
  </tr>
)

BodyRow.propTypes = {
  row: T.shape({})
}

export default BodyRow
