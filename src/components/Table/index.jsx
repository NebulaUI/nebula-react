import React, { Component } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

import Header from './Header'
import Body from './Body'

class Table extends Component {
  constructor() {
    super()

    this.state = {
      sortedBy: false
    }
  }

  componentDidMount() {
    const { columns } = this.props.data
    if (this.isSortable(columns)) {
      this.sort(columns.findIndex(c => c.defaultSorted))
    }
  }

  sort = (index) => {
    const { sortedBy } = this.state
    const columnIndex = index === -1 ? 0 : index
    this.setState({
      sortedBy: {
        columnIndex,
        descending: sortedBy.columnIndex === columnIndex
          ? !sortedBy.descending
          : true,
        label: this.props.data.columns[columnIndex].title
      }
    })
  }

  isSortable = cs => cs.some(c => c.sortable)

  render() {
    const { stackAt, data } = this.props
    const { sortedBy } = this.state
    const stackClassName = !!stackAt && `c-table--stack@${stackAt}`

    return (
      <div className="c-table-container">
        <table
          className={classNames(
            'c-table',
            { 'c-table--sorted': this.isSortable(data.columns) },
            stackClassName
          )}
        >
          <Header columns={data.columns} sortedBy={sortedBy} sort={this.sort} />
          <Body rows={data.rows} />
        </table>
      </div>
    )
  }
}

Table.propTypes = {
  stackAt: T.oneOf(['max-sm', 'max-md']),
  data: T.shape({
    columns: T.arrayOf(T.shape({
      title: T.string.isRequired
    }))
  }).isRequired
}

export { Table }
