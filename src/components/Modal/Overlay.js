import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

class ModalOverlay extends Component {
  componentDidMount() {
    this.context.handleModalOverlayMount()
  }

  render() {
    const { className, node, ...rest } = this.props
    return E(
      node || 'button',
      {
        className: classNames('c-modal__overlay', className),
        'aria-hidden': true,
        onClick: this.context.closeModal,
        tabIndex: -1,
        ...rest
      }
    )
  }
}

ModalOverlay.propTypes = {
  className: T.string,
  node: T.string
}

ModalOverlay.contextTypes = {
  closeModal: T.func.isRequired,
  handleModalOverlayMount: T.func.isRequired
}

export default ModalOverlay
