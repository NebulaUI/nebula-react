import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Toggle = ({ className, open, children, ...rest }) => (
  <button
    className={classNames('c-modal__toggle', className)}
    onClick={open}
    {...rest}
  />
)

Toggle.propTypes = {
  className: T.string,
  open: T.func,
  children: T.node.isRequired
}

export default Toggle
