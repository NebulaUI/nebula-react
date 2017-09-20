import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const FoldableHeader = ({
  padding,
  tag,
  className,
  children,
  ...rest
}, {
  toggleFoldableOpen,
  foldableId,
  foldableDisabled
}) =>
  E(
    tag || 'div',
    {
      className: classNames(
        `${NAMESPACE}c-foldable__header`,
        { [`${NAMESPACE}c-foldable__header--padding`]: padding },
        className
      ),
      ...rest
    },
    E(
      'button',
      {
        className: `${NAMESPACE}c-foldable__toggle`,
        onClick: toggleFoldableOpen,
        'aria-controls': foldableId,
        disabled: foldableDisabled
      }
    ),
    children
  )

FoldableHeader.contextTypes = {
  toggleFoldableOpen: T.func.isRequired,
  foldableId: T.string.isRequired,
  foldableDisabled: T.bool
}

FoldableHeader.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default FoldableHeader
