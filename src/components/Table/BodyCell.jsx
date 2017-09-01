import React from 'react'
import T from 'prop-types'

const BodyCell = ({ data }) => (
  <td className="c-table__cell" data-label="Name">
    { data }
  </td>
)

BodyCell.propTypes = {
  data: T.node.isRequired
}

export default BodyCell
