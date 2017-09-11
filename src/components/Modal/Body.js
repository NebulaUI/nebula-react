import { createElement as E } from 'react'
import T from 'prop-types'
import FocusTrap from 'focus-trap-react'

import { classNames } from '../../utils/'

const ModalBody = ({
  node,
  className,
  children,
  ...rest
}, {
  modalClickOutsideDeactivates,
  modalIsFullyMounted
}) =>
  E(
    node || 'div',
    {
      className: classNames('c-modal__body', className),
      ...rest
    },
    modalIsFullyMounted && E(
      FocusTrap,
      {
        focusTrapOptions: { clickOutsideDeactivates: modalClickOutsideDeactivates }
      },
      children
    )
  )

ModalBody.contextTypes = {
  modalClickOutsideDeactivates: T.bool.isRequired,
  modalIsFullyMounted: T.bool.isRequired
}

ModalBody.propTypes = {
  children: T.node.isRequired
}

export default ModalBody
