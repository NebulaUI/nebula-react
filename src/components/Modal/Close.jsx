import React, { cloneElement } from 'react'
import T from 'prop-types'

const ModalClose = ({ className, children, ...rest }, { closeModal }) => {
  const enhancedChildren = React.Children.map(children, child =>
    cloneElement(child, {
      onClick: closeModal
    })
  )[0]
  return enhancedChildren
}

ModalClose.contextTypes = {
  closeModal: T.func.isRequired
}

ModalClose.propTypes = {
  children: T.element,
  className: T.string
}

export default ModalClose
