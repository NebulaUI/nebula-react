import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

class ModalWrapper extends Component {
  getChildContext = () => ({
    closeModal: this.props.closeModal
  })

  render() {
    const { tag, closeModal, className, isOpen, children, ...rest } = this.props

    return E(
      tag || 'div',
      {
        className: classNames('c-modal', { 'is-open': isOpen }, className),
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
        children
      )
    )
  }
}

ModalWrapper.childContextTypes = {
  closeModal: T.func.isRequired
}

ModalWrapper.propTypes = {
  tag: T.string,
  className: T.string,
  isOpen: T.bool.isRequired,
  closeModal: T.func.isRequired,
  children: T.node.isRequired
}

export default ModalWrapper
