import React, { createElement as E } from 'react'
import T from 'prop-types'
import { classNames, removeFalsy } from '../../utils'

const TabsTabList = ({ node, children, activateTab, activeIndex, className, ...rest }) => {
  const enhancedChildren = React.Children.map(removeFalsy(children), (child, index) =>
    React.cloneElement(child, {
      index,
      activateTab,
      isActive: index === activeIndex
    }))
  return E(
    node || 'div',
    {
      className: classNames('c-tabs__list-wrapper', className),
      ...rest
    },
    E(
      'div',
      { className: 'c-tabs__list' },
      enhancedChildren
    )
  )
}

TabsTabList.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node,
  activateTab: T.func,
  activeIndex: T.number
}

export default TabsTabList
