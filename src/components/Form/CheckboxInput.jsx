import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE } from '../../constants'

const CheckboxInput = ({
  className,
  defaultChecked,
  onChange,
  id,
  checked,
  disabled,
  ...rest
}) => (
  <input
    type="checkbox"
    className={classNames(`${NAMESPACE}c-form-input__input`, className)}
    id={id}
    onChange={onChange}
    checked={checked}
    defaultChecked={defaultChecked}
    disabled={disabled}
    {...rest}
  />
)

CheckboxInput.propTypes = {
  className: T.string,
  onChange: T.func,
  defaultChecked: T.bool,
  checked: T.bool,
  disabled: T.bool,
  id: T.string.isRequired
}

export default CheckboxInput
