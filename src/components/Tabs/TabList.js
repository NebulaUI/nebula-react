import React, { Component, cloneElement, createElement as E } from 'react'
import T from 'prop-types'
import { classNames, removeFalsy } from '../../utils'

import Tab from './Tab'

class TabsTabList extends Component {
  componentDidMount() {
    if (!this.context.activeId) {
      this.setActiveId()
    }
  }

  getFirstChildTarget = () => this.props.children[0].props.target

  setActiveId = () =>
    this.context.activateTab(this.getFirstChildTarget(), true)

  activateTab = (direction, index, child) => {
    const { activateTab } = this.context
    const { children } = this.props
    if (direction === 'next') {
      if (index < children.length - 1) {
        return activateTab(children[index + 1].props.target)
      }

      return null
    }

    if (direction === 'prev') {
      if (index > 0) {
        return activateTab(children[index - 1].props.target)
      }

      return null
    }
    return activateTab(child.props.target)
  }

  render() {
    const { node, children, className, ...rest } = this.props
    const { activeId } = this.context
    const enhancedChildren = React.Children.map(removeFalsy(children), (child, index) => {
      if (child.type === Tab) {
        return cloneElement(child, {
          activateTab: direction => this.activateTab(direction, index, child),
          isActive: child.props.target === activeId
        })
      }

      return child
    })

    return E(
      node || 'div',
      {
        className: classNames('c-tabs__list-wrapper', className),
        ...rest
      },
      E(
        'div',
        {
          className: 'c-tabs__list',
          role: 'tablist'
        },
        enhancedChildren
      )
    )
  }
}

TabsTabList.contextTypes = {
  activeId: T.oneOfType([T.string, T.number]),
  activateTab: T.func.isRequired
}

TabsTabList.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default TabsTabList
