import React, { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames, removeFalsy } from '../../utils'

import List from './TabList'
import Panels from './Panels'

class TabsWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: props.initialActiveIndex || 0
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
      props: { node, className, initialActiveIndex, children, ...rest }
    } = this
    const enhancedChildren = React.Children.map(removeFalsy(children), (child) => {
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
  className: T.string,
  initialActiveIndex: T.number
}

export default TabsWrapper
