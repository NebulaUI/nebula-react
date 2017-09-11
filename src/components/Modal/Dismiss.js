import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

const ModalDismiss = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'button',
    {
      title: 'close',
      className: classNames('c-modal__dismiss', className),
      ...rest
    },
    children
  )

ModalDismiss.propTypes = {
  children: T.node,
  className: T.string
}

export default ModalDismiss
