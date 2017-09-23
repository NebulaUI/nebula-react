import React from 'react'
import T from 'prop-types'

import { randomId } from '../../utils'
import RadioWrapper from './RadioWrapper'
import RadioLabel from './RadioLabel'
import RadioInput from './RadioInput'

const Radio = ({
 id = randomId(),
 onChange,
 checked,
 defaultChecked,
 value,
 disabled,
 name,
 children,
 ...rest
}) => (
  <RadioWrapper {...rest}>
    <RadioInput
      id={id}
      name={name}
      checked={checked}
      disabled={disabled}
      value={value}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
    <RadioLabel htmlFor={id}>
      {children}
    </RadioLabel>
  </RadioWrapper>
)

Radio.propTypes = {
  checked: T.bool,
  defaultChecked: T.bool,
  disabled: T.bool,
  onChange: T.func,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any,
  children: T.node,
  id: T.string,
  name: T.string.isRequired
}

export default Radio
