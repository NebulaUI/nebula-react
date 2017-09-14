import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const initial = 'c-search'

const SearchWrapper = ({
  id,
  action,
  method,
  className,
  submitPosition,
  onSubmit,
  tag,
  children,
  ...rest
}) => {
  const classNameGroup = classNames(`${initial} ${initial}--submit-${submitPosition}`, className)
  return tag
    ? E(
      tag,
      {
        className: classNameGroup
      },
      children
    ) : E(
      'form',
      {
        id,
        role: 'search',
        action,
        method,
        onSubmit,
        className: classNameGroup,
        ...rest
      },
      children
    )
}

SearchWrapper.propTypes = {
  id: T.string,
  action: T.string,
  method: T.string,
  className: T.string,
  tag: T.string,
  children: T.node,
  submitPosition: T.oneOf(['left', 'right']).isRequired,
  onSubmit: T.func
}

export default SearchWrapper

