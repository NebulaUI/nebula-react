import React from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'

const FlagComponent = ({ nowrap, children, className }) => (
  <div
    className={classNames(
      'o-flag__component',
      { 'o-flag__component--nowrap': nowrap },
      className
    )}
  >
    {children}
  </div>
)

FlagComponent.propTypes = {
  nowrap: T.bool,
  children: T.node,
  className: T.string
}

export default FlagComponent
