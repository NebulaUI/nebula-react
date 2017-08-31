import React from 'react'
import T from 'prop-types'
import { classNames, randomId } from '../../utils/'

const initial = 'c-search'

const Search = ({ className, small, type = 'search', placeholder = 'Search....', submitPosition, buttonTitle = 'Submit', ...rest }) => (
  <form role="search" action="" method="" className={classNames(initial, submitPosition ? `${initial}--submit-${submitPosition}` : '', className)}>
    <button title={buttonTitle} type="submit" className={classNames('c-search__submit c-btn c-btn--alpha')} />
    <input
      id={randomId()}
      type={type}
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
  submitPosition: T.oneOf([
    'left', 'right'
  ]),
  buttonTitle: T.string
}

export default Search

