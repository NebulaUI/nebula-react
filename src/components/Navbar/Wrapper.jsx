import React, { Component } from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

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
    const { handleToggle, state: { isOpen }, props: { children, className } } = this
    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === Overlay || child.type === Inner) {
        return React.cloneElement(child, {
          handleToggle
        })
      }
      return child
    })
    return (
      <div className={classNames('c-navbar', className, { 'is-open': isOpen })}>
        {enhancedChildren}
      </div>
    )
  }
}

NavbarWrapper.propTypes = {
  children: T.node.isRequired,
  className: T.string
}

export default NavbarWrapper
