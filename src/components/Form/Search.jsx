import React from 'react'
import T from 'prop-types'

import SearchWrapper from './SearchWrapper'
import SearchSubmit from './SearchSubmit'
import SearchInput from './SearchInput'
import Label from './Label'
import { randomId } from '../../utils/'

const Search = ({
  id = randomId(),
  action,
  method,
  submitPosition,
  small,
  defaultValue,
  onSubmit,
  onChange,
  value,
  children,
  required,
  disabled,
  ...rest
}) => {
  const Input = (
    <SearchInput
      {...{
        small,
        onChange,
        defaultValue,
        value,
        disabled,
        required,
        id: children ? id : undefined
      }}
    />
  )
  const Submit = <SearchSubmit disabled={disabled} />
  return children
    ? (
      <form
        {...{ action, method, onSubmit, ...rest }}
        role="search"
      >
        <Label htmlFor={id}>{ children }</Label>
        <SearchWrapper tag="div" submitPosition={submitPosition}>
          { Input }
          { Submit }
        </SearchWrapper>
      </form>
    ) : (
      <SearchWrapper {...{ action, method, onSubmit, submitPosition, ...rest }}>
        { Input }
        { Submit }
      </SearchWrapper>
    )
}

Search.propTypes = {
  action: T.string,
  method: T.string,
  small: T.bool,
  id: T.string,
  submitPosition: T.oneOf(['left', 'right']).isRequired,
  onChange: T.func,
  onSubmit: T.func,
  disabled: T.bool,
  children: T.node,
  required: T.bool,
  defaultValue: T.oneOfType([T.number, T.string]),
  value: T.oneOfType([T.number, T.string])
}

export default Search
