import React from 'react'
import T from 'prop-types'
import { randomId } from '../../utils/'

import SearchWrapper from './SearchWrapper'
import SearchSubmit from './SearchSubmit'
import SearchInput from './SearchInput'

const Search = ({ id, small, submitPosition, ...rest }) => (
  <SearchWrapper id={randomId()} submitPosition={submitPosition} {...rest}>
    <SearchSubmit />
    <SearchInput id={randomId()} small={small} />
  </SearchWrapper>
)

Search.propTypes = {
  id: T.string,
  small: T.bool,
  submitPosition: T.oneOf(['left', 'right']).isRequired
}

export default Search
