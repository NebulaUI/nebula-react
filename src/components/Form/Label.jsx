import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const Label = ({ className }) => (
  <label htmlFor="text-input-1" className={classNames('c-label', className)}>Forename:</label>
)

Label.propTypes = {
  className: T.string
}

export default Label

