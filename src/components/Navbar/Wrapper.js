import React, { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames, removeFalsy } from '../../utils/'
import Overlay from './Overlay'
import Inner from './Inner'

class NavbarWrapper extends Component {
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
    const {
      handleToggle,
      state: { isOpen },
      props: { node, children, className, sticky, ...rest }
    } = this
    const enhancedChildren = React.Children.map(removeFalsy(children), (child) => {
      if (child.type === Overlay || child.type === Inner) {
        return React.cloneElement(child, {
          handleToggle
        })
      }
      return child
    })
    return E(
      node || 'header',
      {
        className: classNames('c-navbar', { 'is-open': isOpen }),
        ...rest
      },
      E(
        'div',
        {
          className: classNames(
            'c-navbar__inner', className,
            { 'is-sticky': sticky }
          )
        },
        enhancedChildren
      )
    )
  }
}

NavbarWrapper.propTypes = {
  children: T.node.isRequired,
  node: T.string,
  sticky: T.bool,
  className: T.string
}

export default NavbarWrapper
