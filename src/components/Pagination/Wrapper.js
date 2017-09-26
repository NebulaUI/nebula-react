import { createElement as E, Component } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

class PaginationWrapper extends Component {
  render() {
    const { tag, children, className, ...rest } = this.props
    return (
      E(
        tag || 'nav',
        {
          role: 'navigation',
          'aria-label': 'Pagination',
          className: classNames(className),
          ...rest
        },
        E(
          tag || 'ul',
          {
            className: `${NAMESPACE}c-pagination`,
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
}

export default PaginationWrapper
