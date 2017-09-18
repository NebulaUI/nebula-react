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
  label,
  required,
  disabled,
  ...rest
}) => {
  const Input = (
    <SearchInput
      {...{ small, onChange, defaultValue, value, disabled, required, id: label ? id : undefined }}
    />
  )
  const Submit = <SearchSubmit disabled={disabled} />
  return label
    ? (
      <form
        {...{ action, method, onSubmit, ...rest }}
        role="search"
      >
        <Label htmlFor={id}>{ label }</Label>
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
  label: T.string,
  required: T.bool,
  defaultValue: T.oneOfType([T.number, T.string]),
  value: T.oneOfType([T.number, T.string])
}

export default Search
