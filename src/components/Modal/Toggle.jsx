import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-modal__toggle'

const Toggle = ({ node, className, open, children, ...rest }) => (
  <button
    className={classNames(initial, className)}
    onClick={open}
    {...rest}
  >
    { children }
  </button>
)

Toggle.propTypes = {
  node: T.string,
  open: T.func,
  className: T.string,
  children: T.node.isRequired
}

export default Toggle
