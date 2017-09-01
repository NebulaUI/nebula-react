import React from 'react'
import T from 'prop-types'

import Cell from './HeaderCell'

const HeaderRow = ({ columns, sortedBy, sort }) => (
  <tr className="c-table__row c-table__header-row">
    {
      columns.map(({ title, id, sortable, defaultSorted }, index) => (
        <Cell
          key={id}
          sorted={sortedBy.columnIndex === index && { descending: sortedBy.descending }}
          {...{ index, sortable, title, defaultSorted, sort }}
        />
      ))
    }
  </tr>
)

HeaderRow.propTypes = {
  sortedBy: T.oneOfType([
    T.bool,
    T.shape({
      columnIndex: T.number.isRequired,
      descending: T.bool.isRequired
    })
  ]),
  sort: T.func,
  columns: T.arrayOf(T.shape({})).isRequired
}


export default HeaderRow
