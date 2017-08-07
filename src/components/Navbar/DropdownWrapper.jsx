import React, { Component } from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'
import { addEventListener, removeEventListener } from '../../utils/window'

import DropdownToggle from './DropdownToggle'

class NavbarDropdown extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    removeEventListener('mousedown', this.handleClickOutside)
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleClickOutside = (e) => {
    if (!this.wrapperRef.contains(e.target)) {
      this.setState({
        isOpen: false
      })
    }
  }

  render() {
    const { handleToggle, state: { isOpen }, props: { children, className } } = this
    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === DropdownToggle) {
        return React.cloneElement(child, {
          handleToggle
        })
      }
      return child
    })
    return (
      <li
        className={classNames('c-navbar__item', className, { 'is-open': isOpen })}
        ref={(node) => { this.wrapperRef = node }}
      >
        {enhancedChildren}
      </li>
    )
  }
}

NavbarDropdown.propTypes = {
  className: T.string,
  children: T.node.isRequired
}

export default NavbarDropdown
