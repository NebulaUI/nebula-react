import React, { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames, addEListener, removeEListener } from '../../utils'
import Content from './Content'

class FlyoutWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.openOnMount
    }
  }

  getChildContext = () => ({
    handleToggle: this.toggleOpen,
    isOpen: this.state.isOpen
  })

  componentDidMount() {
    setTimeout(() => {
      addEListener('click', this.handleClickOutside)
    }, 50)
  }

  componentWillUnmount() {
    removeEListener('click', this.handleClickOutside)
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleClickOutside = ({ target }) => {
    this.setState({
      isOpen: !this.flyout.contains(target)
        ? false
        : this.state.isOpen
    })
  }

  render() {
    const { isOpen } = this.state
    const {
      openOnMount,
      node, className, children, ...rest
    } = this.props

    return E(
      node || 'div',
      {
        ref: (n) => { this.flyout = n },
        className: classNames('c-flyout', { 'is-open': isOpen }, className),
        ...rest
      },
      children
    )
  }
}

FlyoutWrapper.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired,
  openOnMount: T.bool
}

FlyoutWrapper.childContextTypes = {
  handleToggle: T.func,
  isOpen: T.bool
}

export default FlyoutWrapper
