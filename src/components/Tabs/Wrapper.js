import React, { Component, createElement as E } from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

import List from './TabList'
import Panels from './Panels'

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
    const {
      activateTab,
      state: { activeIndex },
      props: { node, className, children, ...rest }
    } = this
    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === List) {
        return React.cloneElement(child, {
          activeIndex,
          activateTab
        })
      } else if (child.type === Panels) {
        return React.cloneElement(child, {
          activeIndex
        })
      }

      return child
    })
    return E(
      node || 'div',
      { className: classNames('c-tabs', className), ...rest },
      enhancedChildren
    )
  }
}

TabsWrapper.propTypes = {
  node: T.string,
  children: T.node,
  className: T.string
}

export default TabsWrapper
