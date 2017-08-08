import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const TextInput = ({ className }) => (
  <input type="text" id="text-input-1" placeholder="Nebula" className={classNames('c-text-input', className)} />
)

TextInput.propTypes = {
  className: T.string
}

export default TextInput

