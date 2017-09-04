import React from 'react'
import T from 'prop-types'
import { randomId, classNames } from '../../utils/'

const SearchInput = ({ id, className, small, placeholder = 'Search...', ...rest }) => (
  <input
    type="search"
    id={randomId()}
    className={classNames('c-text-input', { 'c-text-input--sm': small }, 'c-search__input', className)}
    placeholder={placeholder}
    {...rest}
  />
)

SearchInput.propTypes = {
  id: T.string,
  className: T.string,
  small: T.bool,
  placeholder: T.string
}

export default SearchInput
