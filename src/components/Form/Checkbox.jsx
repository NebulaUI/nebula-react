import React from 'react'
import T from 'prop-types'

import { randomId } from '../../utils'
import CheckboxWrapper from './CheckboxWrapper'
import CheckboxLabel from './CheckboxLabel'
import CheckboxInput from './CheckboxInput'

const Checkbox = ({
  id = randomId(),
  name,
  checked,
  onChange,
  disabled,
  value,
  children,
  defaultChecked,
  ...rest
}) => (
  <CheckboxWrapper {...rest}>
    <CheckboxInput
      id={id}
      name={name}
      checked={checked}
      disabled={disabled}
      value={value}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
    <CheckboxLabel htmlFor={id}>
      {children}
    </CheckboxLabel>
  </CheckboxWrapper>
)

Checkbox.propTypes = {
  checked: T.bool,
  defaultChecked: T.bool,
  disabled: T.bool,
  onChange: T.func,
  name: T.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any,
  children: T.node,
  id: T.string
}

export default Checkbox
