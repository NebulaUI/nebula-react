import React from 'react'
import T from 'prop-types'

import Row from './HeaderRow'

const Header = ({ columns, sortedBy, sort }) => (
  <thead
    className="c-table__header"
    aria-label={sortedBy && 'Sorted by'}
  >
    <Row {...{ columns, sortedBy, sort }} />
  </thead>
)

Header.propTypes = {
  sortedBy: T.oneOfType([
    T.bool,
    T.shape({})
  ]),
  sort: T.func,
  columns: T.arrayOf(T.shape({})).isRequired
}


export default Header
