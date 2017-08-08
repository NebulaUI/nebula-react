import React, { Component } from 'react'
import T from 'prop-types'

import { classNames, removeFalsy } from '../../utils/'
import Overlay from './Overlay'
import Wrap from './Wrap'

class Inner extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { handleToggle, state: { isOpen }, props: { children, className, ...rest } } = this
    const enhancedChildren = React.Children.map(removeFalsy(children), (child) => {
      if (child.type === Overlay || child.type === Wrap) {
        return React.cloneElement(child, {
          handleToggle
        })
      }
      return child
    })
    return (
      <div className={classNames('c-navbar__inner', className, { 'is-open': isOpen })} {...rest}>
        {enhancedChildren}
      </div>
    )
  }
}

Inner.propTypes = {
  children: T.node.isRequired,
  className: T.string
}

export default Inner
