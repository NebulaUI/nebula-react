import React, { Component } from 'react'
import T from 'prop-types'

import { classNames, callMeOnce } from '../../utils'
import { NAMESPACE, TABLE_COLLAPSE_BREAKPOINTS, TABLE_SPACING } from '../../constants'

const isDescending = (props, state, index) => {
  const { sortedBy } = state
  if (props.sortedBy) {
    return !props.sortedBy.descending
  }

  return sortedBy.index === index
    ? !sortedBy.descending
    : true
}

class TableContainer extends Component {
  state = {
    sortedBy: {
      index: -1,
      descending: true
    },
    columnTitles: []
  }

  getChildContext = () => ({
    tableSortedBy: this.props.sortedBy || this.state.sortedBy,
    tableSort: this.sort,
    tableDisableDefaultSorting: this.props.disableDefaultSorting,
    tableInitialiseSorting: this.initialiseSorting,
    tableGetColumnValues: this.populateRowValue,
    tableColumnTitles: this.state.columnTitles
  })

  sort = (index) => {
    const descending = isDescending(this.props, this.state, index)
    if (this.props.onChange) {
      if (this.props.disableDefaultSorting) {
        this.props.onChange({ index })
      } else {
        this.props.onChange({ index, descending })
      }
    }

    if (!this.props.sortedBy) {
      this.setState({
        sortedBy: {
          index,
          descending
        }
      })
    }
  }

  populateRowValue = (value) => {
    this.setState(state => ({
      columnTitles: [
        ...state.columnTitles,
        value
      ]
    }))
  }

  initialiseSorting = (index, defaultSorted) => {
    if (this.props.sortedBy) {
      return undefined
    }

    return defaultSorted
      ? this.sort(index)
      : callMeOnce(() => this.sort(index))
  }

  render() {
    const {
      sortedBy, onChange, disableDefaultSorting,
      stackAt, className, children, noLabels, spacing, ...rest
    } = this.props
    const isSorted = this.state.sortedBy.index !== -1 || sortedBy
    return (
      <table
        className={classNames(
          `${NAMESPACE}c-table`,
          stackAt ? `${NAMESPACE}c-table--stack@${stackAt}` : '',
          isSorted ? `${NAMESPACE}c-table--sorted` : '',
          noLabels ? `${NAMESPACE}c-table--no-labels` : '',
          spacing ? `${NAMESPACE}c-table--spacing-${spacing}` : '',
          className
        )}
        {...rest}
      >
        { children }
      </table>
    )
  }
}

TableContainer.childContextTypes = {
  tableSortedBy: T.shape({
    index: T.number,
    descending: T.bool
  }).isRequired,
  tableSort: T.func.isRequired,
  tableInitialiseSorting: T.func.isRequired,
  tableGetColumnValues: T.func.isRequired,
  tableDisableDefaultSorting: T.bool,
  tableColumnTitles: T.arrayOf(T.string).isRequired
}

TableContainer.propTypes = {
  stackAt: T.oneOf(TABLE_COLLAPSE_BREAKPOINTS),
  className: T.string,
  children: T.node.isRequired,
  spacing: T.oneOf(TABLE_SPACING),
  onChange: T.func,
  noLabels: T.bool,
  disableDefaultSorting: T.bool,
  sortedBy: T.shape({
    index: T.number.isRequired,
    descending: T.bool.isRequired
  })
}

export default TableContainer
