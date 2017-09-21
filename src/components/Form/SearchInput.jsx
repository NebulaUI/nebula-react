import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE } from '../../constants'
import { Form } from './'

const SearchInput = ({
  id,
  className,
  small,
  placeholder = 'Search...',
  onChange,
  value,
  defaultValue,
  ...rest
}) => (
  <Form.TextInput
    type="search"
    id={id}
    className={classNames(`${NAMESPACE}c-search__input`, { [`${NAMESPACE}c-text-input--sm`]: small }, className)}
    placeholder={placeholder}
    onChange={onChange}
    defaultValue={defaultValue}
    value={value}
    {...rest}
  />
)

SearchInput.propTypes = {
  id: T.string,
  className: T.string,
  small: T.bool,
  placeholder: T.string,
  onChange: T.func,
  defaultValue: T.oneOfType([T.number, T.string]),
  value: T.oneOfType([T.number, T.string])
}

export default SearchInput
