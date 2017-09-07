import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

// eslint-disable-next-line react/prefer-stateless-function
const FlyoutToggle = ({ className, children, ...rest }, { handleToggle }) => (
  <button
    className={classNames('c-flyout__toggle', className)}
    onClick={handleToggle}
    {...rest}
  >
    { children }
  </button>
)

FlyoutToggle.propTypes = {
  className: T.string,
  children: T.node.isRequired
}

FlyoutToggle.contextTypes = {
  handleToggle: T.func
}

export default FlyoutToggle
