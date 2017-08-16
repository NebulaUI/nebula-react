import React, { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import Toggle from './Toggle'

class Wrapper extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { isOpen } = this.state
    const { node, className, children, ...rest } = this.props

    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === Toggle) {
        return React.cloneElement(child, {
          handleToggle: this.toggleOpen
        })
      }

      return child
    })

    return E(
      node || 'div',
      {
        className: classNames('c-flyout', { 'is-open': isOpen }, className),
        ...rest
      },
      enhancedChildren
    )
  }
}

Wrapper.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default Wrapper
