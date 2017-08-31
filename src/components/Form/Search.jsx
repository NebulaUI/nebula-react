import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const initial = 'c-search'

const Search = ({ className, small, type = 'text', iconPosition, ...rest }) => (
  <div className={classNames(initial, iconPosition ? `${initial}--submit-${iconPosition}` : '', className)}>
    <button type="submit" title="submit" className={classNames('c-search__submit c-btn c-btn--alpha')} />
    <input
      id="search"
      type={type}
      placeholder="Search…"
      className={classNames('c-text-input', { 'c-text-input--sm': small }, 'c-search__input', className)}
      {...rest}
    />
  </div>
)

Search.propTypes = {
  className: T.string,
  type: T.oneOf([
    'text', 'password', 'email', 'number', 'search', 'url'
  ]),
  iconPosition: T.oneOf([
    'left', 'right'
  ]),
  small: T.bool
}

export default Search

