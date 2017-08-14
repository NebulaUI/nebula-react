import React from 'react'
import T from 'prop-types'

const Option = ({ value, text, defaultValue, selected, disabled, multiple }) => (
  <div>
    <option
      defaultValue={defaultValue}
      value={value}
      selected={selected}
      disabled={disabled}
      multiple={multiple}
    >
      {text}
    </option>
  </div>
)

Option.propTypes = {
  text: T.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any,
  defaultValue: T.bool,
  selected: T.bool,
  disabled: T.bool,
  multiple: T.bool
}

export default Option
