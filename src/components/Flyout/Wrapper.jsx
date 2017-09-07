import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { ClickOutside } from '../../'

import { classNames } from '../../utils'

class FlyoutWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.defaultOpen
    }
  }

  getChildContext = () => ({
    handleToggle: this.toggleOpen,
    isOpen: this.state.isOpen
  })

  toggleOpen = () => {
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
    const { isOpen } = this.state
    const {
      defaultOpen,
      node, className, children, ...rest
    } = this.props

    return E(
      ClickOutside,
      {
        onClickOutside: this.close
      },
      E(
        node || 'div',
        {
          className: classNames('c-flyout', { 'is-open': isOpen }, className),
          'aria-haspopup': true,
          'aria-expanded': isOpen,
          ...rest
        },
        children
      )
    )
  }
}

FlyoutWrapper.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired,
  defaultOpen: T.bool
}

FlyoutWrapper.childContextTypes = {
  handleToggle: T.func,
  isOpen: T.bool
}

export default FlyoutWrapper
