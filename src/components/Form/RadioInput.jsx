import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const RadioInput = ({ className, onChange, checked, disabled, id, name, ...rest }) => (
  <input
    type="radio"
    className={classNames('c-form-input__input', className)}
    id={id}
    onChange={onChange}
    checked={checked}
    disabled={disabled}
    name={name}
    {...rest}
  />
)

RadioInput.propTypes = {
  className: T.string,
  onChange: T.func,
  checked: T.bool,
  disabled: T.bool,
  id: T.string.isRequired,
  name: T.string.isRequired
}

export default RadioInput
