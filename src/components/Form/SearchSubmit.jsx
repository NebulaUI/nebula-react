import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const SearchSubmit = ({ className, title = 'Submit', children, ...rest }) => (
  <button
    title={title}
    type="submit"
    className={classNames('c-search__submit c-btn c-btn--alpha', className)}
    {...rest}
  >
    { children }
  </button>
)

SearchSubmit.propTypes = {
  className: T.string,
  title: T.string,
  children: T.node
}

export default SearchSubmit
