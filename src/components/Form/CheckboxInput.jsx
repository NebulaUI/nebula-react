import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const CheckboxInput = ({ className, ...rest }) => (
  <input className={classNames('c-form-input__input', className)} {...rest} />
)

CheckboxInput.propTypes = {
  className: T.string
}

export default CheckboxInput
