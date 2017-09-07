import { createElement as E, Component } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class PaginationWrapper extends Component {
  render() {
    const { node, children, className, activeLabel, ...rest } = this.props
    return (
      E(
        node || 'nav',
        {
          role: 'navigation',
          'aria-label': activeLabel,
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
  activeLabel: T.string
}

export default PaginationWrapper
