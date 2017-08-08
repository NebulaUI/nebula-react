import React, { Component } from 'react'
import T from 'prop-types'
import { classNames, addEListener, removeEListener } from '../../utils'

class NavbarDropdownToggle extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    addEListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    removeEListener('click', this.handleClickOutside)
  }

  handleClick = () =>
    this.setState({
      isOpen: !this.state.isOpen
    })


  handleClickOutside = ({ target }) =>
    this.setState({
      isOpen: !this.button.contains(target)
        ? false
        : this.state.isOpen
    })

  render() {
    const { children, className, ...rest } = this.props
    return (
      <button
        onClick={this.handleClick}
        className={classNames('c-navbar__dropdown-toggle', className, { 'is-open': this.state.isOpen })}
        ref={(node) => { this.button = node }}
        {...rest}
      >
        {children}
      </button>
    )
  }
}

NavbarDropdownToggle.propTypes = {
  className: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownToggle
