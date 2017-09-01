import React, { createElement as E, Component } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'
import { addEListener, removeEListener } from '../../utils/window'

import ButtonDropdownToggle from './Toggle'

class ButtonDropdownWrapper extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    addEListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    removeEListener('mousedown', this.handleClickOutside)
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleClickOutside = ({ target }) => {
    this.setState({
      isOpen: !this.wrapperRef.contains(target)
        ? false
        : this.state.isOpen
    })
  }

  render() {
    const {
      handleToggle,
      state: { isOpen },
      props: { node, className, children, togglePosition, fullWidth, ...rest }
    } = this

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
          className: classNames(
            'c-btn-dropdown',
            `c-btn-dropdown--toggle-${togglePosition}`,
            { 'c-btn-dropdown--full': fullWidth },
            { 'is-open': isOpen },
            className
          ),
          ref: (n) => { this.wrapperRef = n },
          ...rest
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
  fullWidth: T.bool,
  togglePosition: T.oneOf(['left', 'right']).isRequired
}

export default ButtonDropdownWrapper
