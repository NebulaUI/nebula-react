import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

import { NAMESPACE } from '../../constants'

const RadioInput = ({
  className,
  onChange,
  checked,
  defaultChecked,
  disabled,
  id,
  name,
  ...rest
}) => (
  <input
    type="radio"
    className={classNames(`${NAMESPACE}c-form-input__input`, className)}
    id={id}
    onChange={onChange}
    checked={checked}
    disabled={disabled}
    name={name}
    defaultChecked={defaultChecked}
    {...rest}
  />
)

RadioInput.propTypes = {
  className: T.string,
  onChange: T.func,
  checked: T.bool,
  defaultChecked: T.bool,
  disabled: T.bool,
  id: T.string.isRequired,
  name: T.string.isRequired
}

export default RadioInput
