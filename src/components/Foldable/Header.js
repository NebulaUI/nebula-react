import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const FoldableHeader = ({
  padding,
  node,
  className,
  children,
  ...rest
}, {
  toggleFoldableOpen,
  foldableId
}) =>
  E(
    node || 'div',
    {
      className: classNames(
        'c-foldable__header',
        { 'c-foldable__header--padding': padding },
        className
      ),
      ...rest
    },
    E(
      'button',
      {
        className: 'c-foldable__toggle',
        onClick: toggleFoldableOpen,
        'aria-controls': foldableId
      }
    ),
    children
  )

FoldableHeader.contextTypes = {
  toggleFoldableOpen: T.func.isRequired,
  foldableId: T.string.isRequired
}

FoldableHeader.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default FoldableHeader
