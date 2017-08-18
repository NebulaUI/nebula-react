import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

const ModalDismiss = ({ closeModal, className, children, ...rest }) => (
  <button
    title="Close"
    className={classNames('c-modal__dismiss', className)}
    onClick={closeModal}
    {...rest}
  >
    { children }
  </button>
)

ModalDismiss.propTypes = {
  closeModal: T.func,
  children: T.node,
  className: T.string
}

export default ModalDismiss
