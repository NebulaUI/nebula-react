import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

const ModalDismiss = ({ className, children, ...rest }) => (
  <button
    title="Close"
    className={classNames('c-modal__dismiss', className)}
    {...rest}
  >
    { children }
  </button>
)

ModalDismiss.propTypes = {
  children: T.node,
  className: T.string
}

export default ModalDismiss
