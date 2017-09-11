import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarToggleWrapper extends Component {
  handleClick = (e) => {
    this.props.callback(e, this)
  }

  render() {
    const { handleToggle, tag, className, callback, children, ...rest } = this.props
    const onClickProps = callback
      ? {
        onClick: this.handleClick
      } : {
        onClick: handleToggle
      }
    return E(
      tag || 'button',
      {
        className: classNames('c-navbar__toggle', className),
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

NavbarToggleWrapper.propTypes = {
  handleToggle: T.func,
  tag: T.string,
  callback: T.func,
  children: T.node,
  className: T.string
}

export default NavbarToggleWrapper
