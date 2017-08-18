import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-modal__overlay'

const Overlay = ({ className, close, ...rest }) => (
  <button
    className={classNames(initial, className)}
    onClick={close}
    {...rest}
  />
)

Overlay.propTypes = {
  close: T.func,
  className: T.string
}

export default Overlay
