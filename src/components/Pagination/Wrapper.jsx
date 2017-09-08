import { createElement as E, Component } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class PaginationWrapper extends Component {
  render() {
    const { node, children, className, ariaLabel, ...rest } = this.props
    return (
      E(
        node || 'nav',
        {
          role: 'navigation',
          'aria-label': ariaLabel && 'Pagination',
          className: classNames(className),
          ...rest
        },
        E(
          node || 'ul',
          {
            className: classNames('c-pagination', className),
            ...rest
          },
          children
        )
      )
    )
  }
}

PaginationWrapper.propTypes = {
  node: T.string,
  children: T.node.isRequired,
  className: T.string,
  ariaLabel: T.string
}

export default PaginationWrapper
