import React from 'react'
import T from 'prop-types'

import RadioWrapper from './RadioWrapper'
import RadioLabel from './RadioLabel'
import RadioInput from './RadioInput'

const Radio = ({ id, checked, value, disabled, name, children }) => (
  <RadioWrapper>
    <RadioInput
      id={id}
      name={name}
      checked={checked}
      disabled={disabled}
      value={value}
    />
    <RadioLabel htmlFor={id}>
      {children}
    </RadioLabel>
  </RadioWrapper>
)

Radio.propTypes = {
  checked: T.bool,
  disabled: T.bool,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any,
  children: T.node.isRequired,
  id: T.string.isRequired,
  name: T.string.isRequired
}

export default Radio
