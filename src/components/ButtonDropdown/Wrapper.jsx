import React, { createElement as E, Component } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

import ButtonDropdownToggle from './Toggle'

class ButtonDropdownWrapper extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
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
    const {
      handleToggle,
      state: { isOpen },
      props: { node, className, children, togglePosition }
    } = this
    const enhancedClassName = classNames(
      `c-btn-dropdown c-btn-dropdown--toggle-${togglePosition}`,
      'c-btn-dropdown--full',
      { 'is-open': isOpen },
      className
    )
    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === ButtonDropdownToggle) {
        return React.cloneElement(child, {
          handleToggle
        })
      }
      return child
    })
    return (
      E(
        node || 'div',
        {
          className: enhancedClassName,
          // eslint-disable-next-line no-shadow
          ref: (node) => { this.wrapperRef = node }
        },
        enhancedChildren
      )
    )
  }
}

ButtonDropdownWrapper.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired,
  togglePosition: T.oneOf(['left', 'right'])
}

export default ButtonDropdownWrapper
