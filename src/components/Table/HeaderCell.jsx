import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

const HeaderCell = ({ sortable, sorted, title, sort, index }) => {
  const handleClick = () => {
    sort(index)
  }

  return (
    <th className={classNames('c-table__header-cell', { 'c-table__header-cell--sortable': sortable })}>
      {
        sortable ? (
          <button
            onClick={handleClick}
            className={classNames(
              'c-table__sort-button',
              { 'is-active': sorted },
              { 'is-descending': sorted && sorted.descending }
            )}
          >
            <span className="c-table__sort-text">{ title }</span>
          </button>
        ) : title
      }
    </th>
  )
}

HeaderCell.propTypes = {
  title: T.string.isRequired,
  sorted: T.oneOfType([
    T.bool,
    T.shape({
      descending: T.bool.isRequired
    })
  ]),
  sort: T.func,
  index: T.number,
  sortable: T.bool
}


export default HeaderCell
