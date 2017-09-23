import React, { Component, cloneElement } from 'react'
import T from 'prop-types'

import { classNames, getDescendantValue } from '../../utils'
import { NAMESPACE } from '../../constants'
import TableSortButton from './SortButton'

class TableHeaderCell extends Component {
  componentWillMount() {
    this.context.tableGetColumnValues(getDescendantValue(this.props.children))
  }

  render() {
    const { index, children, className, ...rest } = this.props
    let isSortable = false
    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === TableSortButton) {
        isSortable = true
        return cloneElement(child, { index })
      }

      return child
    })
    return (
      <th
        className={classNames(
          `${NAMESPACE}c-table__header-cell`,
          isSortable ? `${NAMESPACE}c-table__header-cell--sortable` : '',
          className
        )}
        {...rest}
      >
        { enhancedChildren }
      </th>
    )
  }
}

TableHeaderCell.contextTypes = {
  tableGetColumnValues: T.func.isRequired
}

TableHeaderCell.propTypes = {
  children: T.node.isRequired,
  index: T.number,
  className: T.string
}

export default TableHeaderCell
