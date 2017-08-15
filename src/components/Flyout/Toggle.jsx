import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const FlyoutToggle = ({ className, handleClick }) => (
  <button className={classNames('c-flyout__toggle', className)} onClick={() => {handleClick}}>toggle me: </button>
)

FlyoutToggle.propTypes = {
  className: T.string,
  handleClick: T.func.isRequired
}

export default FlyoutToggle
