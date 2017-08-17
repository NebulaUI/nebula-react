import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const FoldableBody = ({ node, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-foldable__body', className),
      ...rest
    },
    children
  )

FoldableBody.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default FoldableBody
