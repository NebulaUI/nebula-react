import React, { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

import Header from './Header'

class FoldableWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: props.openOnMount }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    const {
      openOnMount, // eslint-disable-line no-unused-vars
      node, breakpoint, bordered, children, className, ...rest
    } = this.props
    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === Header) {
        return React.cloneElement(child, {
          toggleOpen: this.toggleOpen
        })
      }

      return child
    })
    return E(
      node || 'div',
      {
        className: classNames(
          breakpoint ? `c-foldable@${breakpoint}` : 'c-foldable',
          { 'c-foldable--bordered': bordered },
          { 'is-open': isOpen },
          className
        ),
        ...rest
      },
      enhancedChildren
    )
  }
}

FoldableWrapper.propTypes = {
  breakpoint: T.oneOf(['max-lg', 'max-md', 'max-sm', 'max-xs']),
  bordered: T.bool,
  node: T.string,
  openOnMount: T.bool,
  children: T.node.isRequired,
  className: T.string
}

export default FoldableWrapper
