import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const Checkbox = ({ className, children, ...rest }) => (
  <div className="c-form-input">
    {children}
    <input className={classNames('c-form-input__input', className)} {...rest} />
    <label htmlFor="check-2" className={classNames('c-form-input__label c-form-input__label--checkbox', className)}>
      {children}
    </label>
  </div>
)

Checkbox.propTypes = {
  className: T.string,
  children: T.node
}

export default Checkbox
