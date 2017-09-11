import React, { Component, cloneElement, createElement as E } from 'react'
import T from 'prop-types'
import { classNames, removeFalsy } from '../../utils'

import Tab from './Tab'

class TabsTabList extends Component {
  componentDidMount() {
    if (!this.context.activeTabId) {
      this.setActiveId()
    }
  }

  getFirstChildTarget = () => this.props.children[0].props.target

  setActiveId = () =>
    this.context.activateTab(this.getFirstChildTarget(), true)

  handleTabActivate = (direction, index, child) => {
    const { activateTab } = this.context
    const { children } = this.props
    const qtyChildren = React.Children.count(children)

    const getNextTab = () => {
      const nextIndex = index + 1
      const firstChild = children[0]
      const nextChild = children[index + 1]
      const isLastTab = () => nextIndex === qtyChildren
      const getFirstTarget = () => firstChild.props.target
      const isDisabled = () => nextChild.props.disabled
      const getTarget = () => nextChild.props.target

      if (isLastTab()) {
        return activateTab(getFirstTarget())
      }

      if (isDisabled()) {
        return this.handleTabActivate(direction, nextIndex, child)
      }

      return activateTab(getTarget())
    }

    const getPrevTab = () => {
      const prevIndex = index - 1
      const lastChild = children[qtyChildren - 1]
      const prevChild = children[prevIndex]
      const isFirstTab = () => index === 0
      const getLastTarget = () => lastChild.props.target
      const isDisabled = () => prevChild.props.disabled
      const getTarget = () => prevChild.props.target

      if (isFirstTab()) {
        return activateTab(getLastTarget())
      }

      if (isDisabled()) {
        return this.handleTabActivate(direction, prevIndex, child)
      }

      return activateTab(getTarget())
    }

    if (direction === 'next') {
      return getNextTab()
    }

    if (direction === 'prev') {
      return getPrevTab()
    }

    return activateTab(child.props.target)
  }

  render() {
    const { tag, children, className, ...rest } = this.props
    const { activeTabId } = this.context
    const enhancedChildren = React.Children.map(removeFalsy(children), (child, index) =>
      cloneElement(child, {
        activateTab: direction => this.handleTabActivate(direction, index, child),
        isActive: child.props.target === activeTabId
      })
    )

    return E(
      tag || 'div',
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
  activeTabId: T.oneOfType([T.string, T.number]),
  activateTab: T.func.isRequired
}

TabsTabList.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default TabsTabList
