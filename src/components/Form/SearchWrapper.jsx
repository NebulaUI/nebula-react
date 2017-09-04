import React from 'react'
import T from 'prop-types'
import { randomId, classNames } from '../../utils/'

const initial = 'c-search'

const SearchWrapper = ({ id, className, submitPosition, ...rest }) => (
  <form
    id={randomId()}
    role="search"
    action=""
    method=""
    className={classNames(`${initial} ${initial}--submit-${submitPosition}`, className)}
    {...rest}
  />
)

SearchWrapper.propTypes = {
  id: T.string,
  className: T.string,
  submitPosition: T.oneOf(['left', 'right']).isRequired
}

export default SearchWrapper

