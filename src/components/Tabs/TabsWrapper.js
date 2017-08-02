import React, { Component, createElement as E } from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

import TabsList from './TabsList'
import TabsPanels from './TabsPanels'

class TabsWrapper extends Component {
  constructor() {
    super()

    this.state = {
      activeIndex: 0
    }
  }

  activateTab = (activeIndex) => {
    this.setState({
      activeIndex
    })
  }

  render() {
    const { activeIndex } = this.state
    const { node } = this.props
    const children = React.Children.map(this.props.children, (child) => {
      if (child.type === TabsList) {
        return React.cloneElement(child, {
          activeIndex,
          activateTab: this.activateTab
        })
      } else if (child.type === TabsPanels) {
        return React.cloneElement(child, {
          activeIndex
        })
      }

      return child
    })
    return E(
      node || 'div',
      { className: classNames('c-tabs', this.props.className) },
      children
    )
  }
}

TabsWrapper.propTypes = {
  node: T.string,
  children: T.node,
  className: T.string
}

export default TabsWrapper
