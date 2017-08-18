import React, { createElement as E } from 'react'
import T from 'prop-types'
import { classNames, removeFalsy } from '../../utils'

const TabsPanels = ({ node, activeIndex, children, className, ...rest }) => {
  const filteredChildren = React.Children.map(removeFalsy(children), (child, index) => (
    index === activeIndex ? child : null))
  return E(
    node || 'div',
    {
      className: classNames('c-tabs__panels', className),
      ...rest
    },
    filteredChildren
  )
}

TabsPanels.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node,
  activeIndex: T.number
}

export default TabsPanels
