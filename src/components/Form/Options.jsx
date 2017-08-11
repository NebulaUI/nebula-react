import React from 'react'
import T from 'prop-types'

import Select from './Select'

const Options = ({ handleChange, value }) => {
  const handleSelectboxChange = ({ target }) => {
    handleChange(target.value)
  }
  return (
    <Select handleChange={handleSelectboxChange} value={value}>
      <option defaultValue}>Select option</option>
      <option value="1">Value 1</option>
      <option value="2">Value 2</option>
      <option value="3">Value 3</option>
    </Select>
  )
}

Options.propTypes = {
  value: T.any,
  handleChange: T.func
}

export default Options
