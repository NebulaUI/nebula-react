import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const Select = ({ className, onChange, value, children, ...rest }) => (
  <select
    className={classNames('c-select', className)}
    onChange={onChange}
    value={value}
    {...rest}
  >
    {children}
  </select>
)

Select.propTypes = {
  className: T.string,
  name: T.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any,
  children: T.node,
  onChange: T.func.isRequired
}

export default Select
