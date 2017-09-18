import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

import { NAMESPACE } from '../../constants'

const RadioLabel = ({ className, children, htmlFor, ...rest }) => (
  <label
    htmlFor={htmlFor}
    className={classNames(`${NAMESPACE}c-form-input__label ${NAMESPACE}c-form-input__label--radio`, className)}
    {...rest}
  >
    {children}
  </label>
)

RadioLabel.propTypes = {
  className: T.string,
  children: T.node,
  htmlFor: T.string.isRequired
}

export default RadioLabel
