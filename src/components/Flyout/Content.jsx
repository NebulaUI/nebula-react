import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

// eslint-disable-next-line react/prefer-stateless-function
class FlyoutContent extends Component {
  render() {
    const { node, className, children, direction, ...rest } = this.props
    return E(
      node || 'div',
      {
        className: classNames('c-flyout__content', direction ? `c-flyout__content--${direction}` : '', className),
        ...rest
      },
      this.context.isOpen && children
    )
  }
}
FlyoutContent.contextTypes = {
  isOpen: T.bool
}

FlyoutContent.propTypes = {
  node: T.string,
  className: T.string,
  direction: T.oneOf(['nw', 'ne', 'sw', 'se']),
  children: T.node.isRequired,
  isOpen: T.bool
}

export default FlyoutContent
