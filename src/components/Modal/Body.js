import { createElement as E } from 'react'
import T from 'prop-types'
import FocusTrap from 'focus-trap-react'

import { classNames } from '../../utils/'

const ModalBody = ({
  tag,
  className,
  children,
  ...rest
}, {
  modalClickOutsideDeactivates,
  modalIsFullyMounted
}) =>
  E(
    tag || 'div',
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
  children: T.node.isRequired,
  tag: T.string
}

export default ModalBody
