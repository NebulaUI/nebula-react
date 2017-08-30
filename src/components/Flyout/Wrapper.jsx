import React, { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames, addEListener, removeEListener } from '../../utils'
import Content from './Content'

class Wrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.openOnMount
    }
  }

  getChildContext = () => ({
    handleToggle: this.toggleOpen
  })

  componentDidMount() {
    addEListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    removeEListener('click', this.handleClickOutside)
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleClickOutside = ({ target }) =>
    this.setState({
      isOpen: !this.flyout.contains(target)
        ? false
        : this.state.isOpen
    })


  render() {
    const { isOpen } = this.state
    const {
      openOnMount,
      node, className, children, ...rest
    } = this.props

    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === Content) {
        return React.cloneElement(child, {
          isOpen
        })
      }

      return child
    })

    return E(
      node || 'div',
      {
        ref: (n) => { this.flyout = n },
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
  children: T.node.isRequired,
  openOnMount: T.bool
}

Wrapper.childContextTypes = {
  handleToggle: T.func
}

export default Wrapper
