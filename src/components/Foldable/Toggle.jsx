import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const FoldableToggle = ({ toggleOpen, className, children, ...rest }) => {
  const handleClick = () => {
    toggleOpen()
  }
  return (
    <button
      className={classNames('c-foldable__toggle', className)}
      aria-hidden
      {...rest}
      onClick={handleClick}
    >
      { children }
    </button>
  )
}

FoldableToggle.propTypes = {
  toggleOpen: T.func,
  className: T.string,
  children: T.node
}

export default FoldableToggle
