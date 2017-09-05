import React from 'react'
import T from 'prop-types'
import { randomId, classNames } from '../../utils/'

import { Form } from './'

const SearchInput = ({
  id = randomId(),
  className,
  small,
  placeholder = 'Search...',
  onChange,
  value,
  defaultValue,
  ...rest }) => (
    <Form.TextInput
      type="search"
      id={id}
      className={classNames('c-search__input' || className, { 'c-text-input--sm': small })}
      placeholder={placeholder}
      onChange={onChange}
      value={defaultValue}
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
