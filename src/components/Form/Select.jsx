import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

import { NAMESPACE } from '../../constants'

const Select = ({ className, small, onChange, value, children, ...rest }) => (
  <select
    className={classNames(`${NAMESPACE}c-select`, { [`${NAMESPACE}c-select--sm`]: small }, className)}
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
  onChange: T.func,
  small: T.bool
}

export default Select
