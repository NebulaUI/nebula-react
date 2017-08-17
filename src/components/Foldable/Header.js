import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const FoldableHeader = ({ toggleOpen, padding, node, className, children, ...rest }) => {
  const handleClick = () => {
    toggleOpen()
  }
  return E(
    node || 'div',
    {
      className: classNames(
        'c-foldable__head',
        { 'c-foldable__head--padding': padding },
        className
      ),
      ...rest
    },
    E(
      'button',
      {
        className: 'c-foldable__toggle',
        onClick: handleClick
      }
    ),
    children
  )
}

FoldableHeader.propTypes = {
  toggleOpen: T.func,
  node: T.string,
  className: T.string,
  children: T.node
}

export default FoldableHeader
