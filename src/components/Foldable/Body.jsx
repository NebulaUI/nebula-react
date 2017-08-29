import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const FoldableBody = ({ node, isOpen, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-foldable__body', className),
      ...rest
    },
    isOpen ? children : null
  )

FoldableBody.propTypes = {
  node: T.string,
  className: T.string,
  isOpen: T.bool,
  children: T.node
}

export default FoldableBody
