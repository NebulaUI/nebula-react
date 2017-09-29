import React, { Component } from 'react'
import T from 'prop-types'

import { classNames, sortChildren } from '../../utils'
import { NAMESPACE } from '../../constants'

class TableBody extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextContext.tableSortedBy !== this.context.tableSortedBy) {
      return true
    }

    return nextContext.tableColumnTitles !== this.context.tableColumnTitles
  }

  sort = () =>
    sortChildren(
      React.Children.toArray(this.props.children),
      this.context.tableSortedBy
    )

  render() {
    const { hoverRowHighlight, children, className, ...rest } = this.props
    const { tableSortedBy, tableDisableDefaultSorting } = this.context
    const sortedChildren = tableSortedBy.index === -1 || tableDisableDefaultSorting
      ? children
      : this.sort()

    return (
      <tbody
        className={classNames(
          `${NAMESPACE}c-table__body`,
          hoverRowHighlight ? `${NAMESPACE}c-table__body--hover-row-highlight` : '',
          className
        )}
        {...rest}
      >
        { sortedChildren }
      </tbody>
    )
  }
}

TableBody.contextTypes = {
  tableSortedBy: T.shape({
    index: T.number,
    descending: T.bool
  }).isRequired,
  tableDisableDefaultSorting: T.bool,
  tableColumnTitles: T.arrayOf(T.string)
}


TableBody.propTypes = {
  hoverRowHighlight: T.bool,
  children: T.node.isRequired,
  className: T.string
}

export default TableBody
