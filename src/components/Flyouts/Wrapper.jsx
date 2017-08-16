import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const FlyoutWrapper = ({ node, className, isOpen, children, direction, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-flyout', { 'is-open': isOpen }, className),
      ...rest
    },
    children
  )

FlyoutWrapper.propTypes = {
  direction: T.shape({
    ne: true,
    se: false,
    sw: false,
    nw: false
  }),
  node: T.string,
  className: T.string,
  isOpen: T.bool,
  children: T.node.isRequired
}

export default FlyoutWrapper
