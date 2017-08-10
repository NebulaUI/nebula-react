import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const RadioLabel = ({ className, children, id, ...rest }) => (
  <label
    id="c-form-input__label"
    htmlFor={id}
    className={classNames('c-form-input__label c-form-input__label--radio', className)}
    {...rest}
  >
    {children}
  </label>
)

RadioLabel.propTypes = {
  className: T.string,
  children: T.node,
  id: T.string.isRequired
}

export default RadioLabel
