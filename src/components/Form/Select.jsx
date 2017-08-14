import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const handleChange = ({ target }) => target.value

const Select = ({ className, name, target, value, children, ...rest }) => (
  <Select
    className={classNames('c-select', className)}
    onChange={handleChange}
    name={name}
    value={value}
    {...rest}
  >
    {children}
  </Select>
)

Select.propTypes = {
  target: T.node,
  className: T.string,
  name: T.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any,
  children: T.node
}

export default Select
