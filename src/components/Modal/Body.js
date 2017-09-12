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
  modalIsFullyMounted,
  modalWidth
}) =>
  E(
    tag || 'div',
    {
      className: classNames('c-modal__body', className),
      style: {
        width: modalWidth
      },
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
  modalClickOutsideDeactivates: T.bool,
  modalIsFullyMounted: T.bool.isRequired,
  modalWidth: T.number
}

ModalBody.propTypes = {
  children: T.node.isRequired,
  className: T.string,
  tag: T.string
}

export default ModalBody
