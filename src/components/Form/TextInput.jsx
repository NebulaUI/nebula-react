import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE } from '../../constants'

const TextInput = ({
  id,
  type = 'text',
  className,
  small,
  onChange,
  value,
  defaultValue,
  disabled,
  ...rest }) => (
    <input
      className={classNames(`${NAMESPACE}c-text-input`, { [`${NAMESPACE}c-text-input--sm`]: small }, className)}
      {...{ id, type, disabled, onChange, defaultValue, value }}
      {...rest}
    />
)

TextInput.propTypes = {
  id: T.string,
  className: T.string,
  small: T.bool,
  type: T.oneOf([
    'text', 'password', 'email', 'number', 'search', 'url'
  ]),
  onChange: T.func,
  disabled: T.bool,
  defaultValue: T.oneOfType([T.number, T.string]),
  value: T.oneOfType([T.number, T.string])
}

export default TextInput

