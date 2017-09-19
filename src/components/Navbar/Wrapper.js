import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

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
        className: classNames(`${NAMESPACE}c-navbar`, { [`${NAMESPACE}is-open`]: this.state.isOpen }),
        ...rest
      },
      E(
        'div',
        {
          className: classNames(
            `${NAMESPACE}c-navbar__inner`, className,
            { [`${NAMESPACE}is-sticky`]: sticky }
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
  tag: T.oneOf(BLOCK_TAGS),
  sticky: T.bool,
  className: T.string
}

export default NavbarWrapper
