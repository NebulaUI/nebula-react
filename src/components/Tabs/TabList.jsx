import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const TabList = ({ children, activateTab, activeIndex, className }) => {
  const enhancedChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      index,
      activateTab,
      isActive: index === activeIndex
    }))
  return (
    <div className="c-tabs__list-wrapper">
      <div className={classNames('c-tabs__list', className)}>
        {enhancedChildren}
      </div>
    </div>
  )
}

TabList.propTypes = {
  className: T.string,
  children: T.node,
  activateTab: T.func,
  activeIndex: T.number
}

export default TabList
