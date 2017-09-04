import React from 'react'
import T from 'prop-types'
import { randomId, classNames } from '../../utils/'

import { Form } from './'

const SearchInput = ({ id, className, small, placeholder = 'Search...', handleChange, value, ...rest }) => (
  <Form.TextInput
    type="search"
    id={id || randomId()}
    className={classNames('c-text-input', { 'c-text-input--sm': small }, 'c-search__input', className)}
    placeholder={placeholder}
    onChange={handleChange}
    value={value}
    {...rest}
  />
)

SearchInput.propTypes = {
  id: T.string,
  className: T.string,
  small: T.bool,
  placeholder: T.string,
  handleChange: T.func,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any
}

export default SearchInput
