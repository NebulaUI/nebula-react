import React from 'react'
import T from 'prop-types'
import { randomId, classNames } from '../../utils/'

const initial = 'c-search'

const SearchWrapper = ({
  id,
  action,
  method,
  className,
  submitPosition,
  handleSubmit,
  ...rest
}) => (
  <form
    id={id || randomId()}
    role="search"
    action={action}
    method={method}
    className={classNames(`${initial} ${initial}--submit-${submitPosition}`, className)}
    onSubmit={handleSubmit}
    {...rest}
  />
)

SearchWrapper.propTypes = {
  id: T.string,
  action: T.string,
  method: T.string,
  className: T.string,
  handleSubmit: T.func,
  submitPosition: T.oneOf(['left', 'right']).isRequired
}

export default SearchWrapper

