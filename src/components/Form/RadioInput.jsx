import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const RadioInput = ({ className, checked, disabled, id, name, ...rest }) => (
  <input
    type="radio"
    className={classNames('c-form-input__input', className)}
    id={id}
    checked={checked}
    disabled={disabled}
    name={name}
    {...rest}
  />
)

RadioInput.propTypes = {
  className: T.string,
  checked: T.bool,
  disabled: T.bool,
  id: T.string.isRequired,
  name: T.string.isRequired
}

export default RadioInput
