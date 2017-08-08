import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const CheckboxWrapper = ({ className, children, ...rest }) => (
  <div className={classNames('c-form-input', className)} {...rest}>
    {children}
  </div>
)

CheckboxWrapper.propTypes = {
  className: T.string,
  children: T.node
}

export default CheckboxWrapper
