import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils'

const Tab = ({ children, index, activateTab, isActive, className, ...rest }) => {
  const handleClick = () => { activateTab(index) }
  return (
    <button
      onClick={handleClick}
      className={classNames('c-tabs__tab', className, { 'is-active': isActive })}
      {...rest}
    >
      {children}
    </button>
  )
}

Tab.propTypes = {
  children: T.node,
  activateTab: T.func,
  index: T.number,
  isActive: T.bool,
  className: T.string
}

export default Tab
