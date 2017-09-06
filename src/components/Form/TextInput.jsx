import React from 'react'
import T from 'prop-types'
import { randomId, classNames } from '../../utils/'

const TextInput = ({
  id = randomId(),
  type = 'text',
  className,
  small,
  onChange,
  value,
  defaultValue,
  ...rest }) => (
    <input
      id={id}
      type={type}
      className={classNames('c-text-input', { 'c-text-input--sm': small }, className)}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
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
  defaultValue: T.oneOfType([T.number, T.string]),
  value: T.oneOfType([T.number, T.string])
}

export default TextInput

