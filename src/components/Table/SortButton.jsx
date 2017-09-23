import React, { Component } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { NAMESPACE } from '../../constants'

class TableSortButton extends Component {
  componentWillMount() {
    this.context.tableInitialiseSorting(this.props.index, this.props.defaultSorted)
  }

  render() {
    const {
      index,
      children,
      className,
      defaultSorted,
      targetColumnIndex,
      ...rest
    } = this.props
    const { tableSort, tableSortedBy } = this.context
    const handleClick = () => tableSort(parseInt(targetColumnIndex, 10) || index)
    const isSorted = targetColumnIndex
      ? tableSortedBy.index === parseInt(targetColumnIndex, 10)
      : tableSortedBy.index === index

    return (
      <button
        onClick={handleClick}
        className={classNames(
          `${NAMESPACE}c-table__sort-button`,
          { 'is-active': isSorted },
          { 'is-descending': isSorted && tableSortedBy.descending },
          className
        )}
        {...rest}
      >
        <span className={`${NAMESPACE}c-table__sort-text`}>
          { children }
        </span>
      </button>
    )
  }
}

TableSortButton.contextTypes = {
  tableSort: T.func.isRequired,
  tableSortedBy: T.shape({
    index: T.number,
    descending: T.bool
  }).isRequired,
  tableInitialiseSorting: T.func.isRequired
}

TableSortButton.propTypes = {
  children: T.node.isRequired,
  index: T.number,
  defaultSorted: T.bool,
  className: T.string,
  targetColumnIndex: T.oneOfType([T.string, T.number])
}

export default TableSortButton
