import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

// eslint-disable-next-line react/prefer-stateless-function
const FlyoutContent = ({ tag, className, children, ...rest }, { isFlyoutOpen, flyoutDirection }) =>
  E(
    tag || 'div',
    {
      className: classNames('c-flyout__content', flyoutDirection ? `c-flyout__content--${flyoutDirection}` : '', className),
      ...rest
    },
    isFlyoutOpen && children
  )

FlyoutContent.contextTypes = {
  isFlyoutOpen: T.bool,
  flyoutDirection: T.oneOf(['nw', 'ne', 'sw', 'se'])
}

FlyoutContent.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default FlyoutContent
