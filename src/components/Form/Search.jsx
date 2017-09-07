import React from 'react'
import T from 'prop-types'

import SearchWrapper from './SearchWrapper'
import SearchSubmit from './SearchSubmit'
import SearchInput from './SearchInput'

const Search = ({
  action,
  method,
  submitPosition,
  small,
  defaultValue,
  onSubmit,
  onChange,
  value,
  ...rest
}) => (
  <SearchWrapper
    action={action}
    method={method}
    onSubmit={onSubmit}
    submitPosition={submitPosition}
    {...rest}
  >
    <SearchSubmit />
    <SearchInput
      small={small}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
    />
  </SearchWrapper>
)

Search.propTypes = {
  action: T.string,
  method: T.string,
  small: T.bool,
  submitPosition: T.oneOf(['left', 'right']).isRequired,
  onChange: T.func,
  onSubmit: T.func,
  defaultValue: T.oneOfType([T.number, T.string]),
  value: T.oneOfType([T.number, T.string])
}

export default Search
