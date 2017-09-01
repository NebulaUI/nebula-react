import React from 'react'
import T from 'prop-types'

import Row from './BodyRow'

const Body = ({ rows }) => (
  <tbody className="c-table__body">
    { rows.map(r => <Row key={r.id} row={r} />) }
  </tbody>
)

Body.propTypes = {
  rows: T.arrayOf(T.shape({
    id: T.string.isRequired
  }))
}

export default Body
