import React, { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import Content from './Content'

const initial = 'c-modal'

const ModalWrapper = ({ node, closeModal, className, isOpen, children, ...rest }) => {
  const enhancedChildren = React.Children.map(children, (child) => {
    if (child.type === Content) {
      return React.cloneElement(child, {
        closeModal
      })
    }

    return child
  })
  return E(
    node || 'div',
    {
      className: classNames(initial, { 'is-open': isOpen }, className),
      ...rest
    },
    E(
      'button',
      {
        className: 'c-modal__overlay',
        onClick: closeModal
      }
    ),
    E(
      'div',
      { className: 'c-modal__body' },
      enhancedChildren
    )
  )
}

ModalWrapper.propTypes = {
  node: T.string,
  className: T.string,
  isOpen: T.bool.isRequired,
  closeModal: T.func.isRequired,
  children: T.node.isRequired
}

export default ModalWrapper
