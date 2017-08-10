import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const RadioInput = ({ className, id, name, ...rest }) => (
  <input
    className={classNames('c-form-input__input', className)}
    id="radio-1"
    name="radio-group"
    {...rest}
  />
)

RadioInput.propTypes = {
  className: T.string,
  children: T.node,
  id: T.string.isRequired,
  name: T.string.isRequired
}

export default RadioInput
