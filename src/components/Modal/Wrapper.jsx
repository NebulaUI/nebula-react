import { Component, createElement as E } from 'react'
import T from 'prop-types'
import noScroll from 'no-scroll'

import { classNames } from '../../utils/'

class ModalWrapper extends Component {
  getChildContext = () => ({
    closeModal: this.props.closeModal
  })

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.isOpen !== this.props.isOpen)) {
      if (this.props.isOpen) {
        noScroll.on()
        setTimeout(() => {
          this.bodyNode.focus()
        }, 0)
      } else {
        noScroll.off()
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 27) {
      this.props.closeModal()
    }
  }

  render() {
    const { node, closeModal, className, isOpen, ariaLabel, children, ...rest } = this.props

    return E(
      node || 'div',
      {
        className: classNames('c-modal', { 'is-open': isOpen }, className),
        role: 'dialog',
        'aria-label': ariaLabel,
        'aria-hidden': !isOpen,
        ...rest
      },
      E(
        'button',
        {
          className: 'c-modal__overlay',
          'aria-hidden': true,
          onClick: closeModal,
          tabIndex: -1
        }
      ),
      E(
        'div',
        {
          className: 'c-modal__body',
          ref: (n) => { this.bodyNode = n },
          tabIndex: isOpen ? 1 : -1
        },
        children
      )
    )
  }
}

ModalWrapper.childContextTypes = {
  closeModal: T.func.isRequired
}

ModalWrapper.propTypes = {
  node: T.string,
  className: T.string,
  isOpen: T.bool.isRequired,
  ariaLabel: T.string.isRequired,
  closeModal: T.func.isRequired,
  children: T.element.isRequired
}

export default ModalWrapper
