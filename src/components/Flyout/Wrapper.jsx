import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const FlyoutWrapper = ({ node, className, handleClick, isOpen, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-flyout', className),
      ...rest
    },
    children
  )

FlyoutWrapper.propTypes = {
  node: T.string,
  className: T.string,
  handleClick: T.func.isRequired,
  isOpen: T.bool,
  children: T.node.isRequired
}

export default FlyoutWrapper
