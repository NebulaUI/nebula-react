import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

import { NAMESPACE } from '../../constants'

const CheckboxLabel = ({ className, children, htmlFor, ...rest }) => (
  <label
    htmlFor={htmlFor}
    className={classNames(`${NAMESPACE}c-form-input__label ${NAMESPACE}c-form-input__label--checkbox`, className)}
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

