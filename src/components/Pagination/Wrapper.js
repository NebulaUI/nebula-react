import { createElement as E, Component } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

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
            className: `${NAMESPACE}c-pagination`,
            ...rest
          },
          children
        )
      )
    )
  }
}

PaginationWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  children: T.node.isRequired,
  className: T.string,
  ariaLabel: T.string
}

export default PaginationWrapper
