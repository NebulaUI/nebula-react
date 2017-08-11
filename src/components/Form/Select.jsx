import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const Select = ({ className, handleChange, value, children, ...rest }) => (
  <Select
    className={classNames('c-select', className)}
    onChange={handleChange}
    value={value}
    {...rest}
  >
    { children }
  </Select>
)

Select.propTypes = {
  className: T.string,
  handleChange: T.func,
  value: T.any,
  children: T.node
}

export default Select
