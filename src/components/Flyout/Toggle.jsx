import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Toggle = ({ className, handleToggle, children, ...rest }) => (
  <button
    className={classNames('c-flyout__toggle', className)}
    onClick={handleToggle}
    {...rest}
  >
    { children }
  </button>
)

Toggle.propTypes = {
  className: T.string,
  handleToggle: T.func,
  children: T.node.isRequired
}

export default Toggle
