import React from 'react'
import T from 'prop-types'
import { randomId, classNames } from '../../utils/'

const initial = 'c-search'

const SearchWrapper = ({
  id = randomId(),
  action,
  method,
  className,
  submitPosition,
  onSubmit,
  ...rest
}) => (
  <form
    id={id}
    role="search"
    action={action}
    method={method}
    className={classNames(`${initial} ${initial}--submit-${submitPosition}`, className)}
    onSubmit={onSubmit}
    {...rest}
  />
)

SearchWrapper.propTypes = {
  id: T.string,
  action: T.string,
  method: T.string,
  className: T.string,
  submitPosition: T.oneOf(['left', 'right']).isRequired,
  onSubmit: T.func
}

export default SearchWrapper

