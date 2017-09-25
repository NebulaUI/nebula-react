import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const initial = `${NAMESPACE}c-search`

const SearchWrapper = ({
  id,
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
        onSubmit,
        className: classNameGroup,
        ...rest
      },
      children
    )
}

SearchWrapper.propTypes = {
  id: T.string,
  className: T.string,
  tag: T.oneOf(BLOCK_TAGS),
  children: T.node,
  submitPosition: T.oneOf(['left', 'right']).isRequired,
  onSubmit: T.func
}

export default SearchWrapper

