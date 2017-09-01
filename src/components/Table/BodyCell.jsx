import React from 'react'
import T from 'prop-types'

const BodyCell = ({ cell }) => (
  <td className="c-table__cell" data-label="Name">
    { cell.children }
  </td>
)

BodyCell.propTypes = {
  cell: T.shape({
    children: T.node.isRequired
  })
}

export default BodyCell
