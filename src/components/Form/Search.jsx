import React from 'react'
import T from 'prop-types'
import { classNames, randomId } from '../../utils/'

const initial = 'c-search'

const Search = ({ id, className, small, placeholder = 'Search....', submitPosition, submitTitle = 'Submit', ...rest }) => (
  <form role="search" action="" method="" className={classNames(`${initial} ${initial}--submit-${submitPosition}`, className)}>
    <button title={submitTitle} type="submit" className={classNames('c-search__submit c-btn c-btn--alpha')} />
    <input
      id={randomId()}
      type="search"
      placeholder={placeholder}
      className={classNames('c-text-input', { 'c-text-input--sm': small }, 'c-search__input', className)}
      {...rest}
    />
  </form>
)

Search.propTypes = {
  id: T.string,
  className: T.string,
  small: T.bool,
  type: T.string,
  placeholder: T.string,
  submitTitle: T.string,
  submitPosition: T.oneOf(['left', 'right']).isRequired
}

export default Search

