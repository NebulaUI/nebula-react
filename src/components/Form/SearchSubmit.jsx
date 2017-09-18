import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

import { NAMESPACE } from '../../constants'

const SearchSubmit = ({ className, title = 'Submit', children, ...rest }) => (
  <button
    title={title}
    type="submit"
    className={classNames(`${NAMESPACE}c-search__submit ${NAMESPACE}c-btn ${NAMESPACE}c-btn--alpha`, className)}
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
