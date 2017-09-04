import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const TextInput = ({ className, small, value, type = 'text', handleChange, ...rest }) => (
  <input
    type={type}
    className={classNames('c-text-input', { 'c-text-input--sm': small }, className)}
    onChange={handleChange}
    value={value}
    {...rest}
  />
)

TextInput.propTypes = {
  className: T.string,
  type: T.oneOf([
    'text', 'password', 'email', 'number', 'search', 'url'
  ]),
  small: T.bool,
  handleChange: T.func,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any
}

export default TextInput

