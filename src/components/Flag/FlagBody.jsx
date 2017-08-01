import React from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'

const Body = ({ children, className }) => (
  <div className={classNames('o-flag__body', className)}>
    {children}
  </div>
)

Body.propTypes = {
  children: T.node,
  className: T.string
}

export default Body
