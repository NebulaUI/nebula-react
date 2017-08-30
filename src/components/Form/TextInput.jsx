import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const TextInput = ({ className, small, type = 'text', ...rest }) => (
  <input
    type={type}
    className={classNames('c-text-input', { 'c-text-input--sm': small }, className)}
    {...rest}
  />
)

TextInput.propTypes = {
  className: T.string,
  type: T.oneOf([
    'text', 'password', 'email', 'number', 'search', 'url'
  ]),
  small: T.bool
}

export default TextInput

