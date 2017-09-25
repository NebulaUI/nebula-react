import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE } from '../../constants'
import { Form } from './'

const SearchInput = ({
  id,
  className,
  small,
  placeholder = 'Search…',
  onChange,
  value,
  disabled,
  defaultValue,
  ...rest
}) => (
  <Form.TextInput
    type="search"
    className={classNames(`${NAMESPACE}c-search__input`, { [`${NAMESPACE}c-text-input--sm`]: small }, className)}
    {...{ id, disabled, placeholder, onChange, defaultValue, value }}
    {...rest}
  />
)

SearchInput.propTypes = {
  id: T.string,
  className: T.string,
  small: T.bool,
  placeholder: T.string,
  disabled: T.bool,
  onChange: T.func,
  defaultValue: T.oneOfType([T.number, T.string]),
  value: T.oneOfType([T.number, T.string])
}

export default SearchInput
