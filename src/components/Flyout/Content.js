import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, appendUnit } from '../../utils/'
import { NAMESPACE, FLYOUT_DIRECTIONS, BLOCK_TAGS } from '../../constants'

// eslint-disable-next-line react/prefer-stateless-function
const FlyoutContent = ({
  width,
  direction,
  tag,
  className,
  children,
  ...rest
},
{
  isFlyoutOpen
}) =>
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-flyout__content`, `${NAMESPACE}c-flyout__content--${direction}`, className),
      style: { width: width && appendUnit(width, 'px') },
      ...rest
    },
    isFlyoutOpen && children
  )

FlyoutContent.contextTypes = {
  isFlyoutOpen: T.bool
}

FlyoutContent.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired,
  width: T.oneOfType([T.string, T.number]),
  direction: T.oneOf(FLYOUT_DIRECTIONS).isRequired
}

export default FlyoutContent
