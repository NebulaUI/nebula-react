import React, { Component } from 'react'
import T from 'prop-types'

import { randomId } from '../../utils'

import Row from './BodyRow'

class Body extends Component {
  componentWillMount() {
    this.rows = this.props.rows.map(cells =>
      ({
        id: randomId(),
        cells: cells.map(cell => ({
          id: randomId(),
          value: cell
        }))
      })
    )
  }

  render() {
    return (
      <tbody className="c-table__body">
        { this.rows.map(r => <Row key={r.id} cells={r.cells} />) }
      </tbody>
    )
  }
}

Body.propTypes = {
  rows: T.arrayOf(T.arrayOf(T.any))
}

export default Body
