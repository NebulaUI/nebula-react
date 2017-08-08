import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const TextInput = ({ className, ...rest }) => (
  <input className={classNames('c-text-input', className)} {...rest} />
)

TextInput.propTypes = {
  className: T.string
}

export default TextInput

