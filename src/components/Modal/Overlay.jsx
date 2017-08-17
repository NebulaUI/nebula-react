import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Overlay = ({ className, close, ...rest }) => (
  <button
    className={classNames('c-modal__overlay', className)}
    onClick={close}
    {...rest}
  />
)

Overlay.propTypes = {
  className: T.string,
  close: T.func
}

export default Overlay
