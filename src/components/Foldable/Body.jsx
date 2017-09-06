import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const FoldableBody = ({ node, className, children, ...rest }, { isOpen, foldableId }) =>
  E(
    node || 'div',
    {
      className: classNames('c-foldable__body', className),
      id: foldableId,
      ...rest
    },
    isOpen ? children : null
  )

FoldableBody.contextTypes = {
  isOpen: T.bool.isRequired,
  foldableId: T.string.isRequired
}

FoldableBody.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default FoldableBody
