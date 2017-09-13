import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

class NavbarWrapper extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  getChildContext = (() => ({
    handleToggle: this.handleToggle,
    close: this.close
  }))

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  close = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const { tag, children, className, sticky, ...rest } = this.props
    return E(
      tag || 'header',
      {
        className: classNames('c-navbar', { 'is-open': this.state.isOpen }),
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
        children
      )
    )
  }
}

NavbarWrapper.childContextTypes = {
  handleToggle: T.func.isRequired,
  close: T.func.isRequired
}

NavbarWrapper.propTypes = {
  children: T.node.isRequired,
  tag: T.string,
  sticky: T.bool,
  className: T.string
}

export default NavbarWrapper
