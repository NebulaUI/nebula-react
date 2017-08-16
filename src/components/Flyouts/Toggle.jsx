import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const FlyoutToggle = ({ className, handleClick, direction }) => (
  <button className={classNames('c-flyout__toggle', className)} onClick={() => { handleClick(direction) }}>toggle me: </button>
)

FlyoutToggle.propTypes = {
  direction: T.shape({
    ne: true,
    se: false,
    sw: false,
    nw: false
  }),
  className: T.string,
  handleClick: T.func.isRequired
}

export default FlyoutToggle
