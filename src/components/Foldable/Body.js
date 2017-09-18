import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const FoldableBody = ({ tag, className, children, ...rest }, { isFoldableOpen, foldableId }) =>
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-foldable__body`, className),
      id: foldableId,
      'aria-hidden': !isFoldableOpen,
      ...rest
    },
    isFoldableOpen && children
  )

FoldableBody.contextTypes = {
  isFoldableOpen: T.bool.isRequired,
  foldableId: T.string.isRequired
}

FoldableBody.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default FoldableBody
