import { createElement as E, Component } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class PaginationWrapper extends Component {
  render() {
    const { tag, children, className, ariaLabel, ...rest } = this.props
    return (
      E(
        tag || 'nav',
        {
          role: 'navigation',
          'aria-label': ariaLabel && 'Pagination',
          className: classNames(className),
          ...rest
        },
        E(
          tag || 'ul',
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
  tag: T.string,
  children: T.node.isRequired,
  className: T.string,
  ariaLabel: T.string
}

export default PaginationWrapper
