import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const CheckboxLabel = ({ className, children, htmlFor, ...rest }) => (
  <label
    id="c-form-input__label"
    htmlFor={htmlFor}
    className={classNames('c-form-input__label c-form-input__label--checkbox', className)}
    {...rest}
  >
    {children}
  </label>
)

CheckboxLabel.propTypes = {
  className: T.string,
  children: T.node,
  htmlFor: T.string.isRequired
}

export default CheckboxLabel

