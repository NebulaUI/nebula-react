import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarOverlay extends Component {
  handleClick = (e) => {
    this.props.callback(e, this)
  }

  render() {
    const { close, node, className, callback, children, ...rest } = this.props
    const onClickProps = callback
      ? {
        onClick: this.handleClick
      } : {
        onClick: close
      }
    return E(
      node || 'button',
      {
        className: classNames('c-navbar__overlay', className),
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

NavbarOverlay.propTypes = {
  close: T.func,
  node: T.string,
  callback: T.func,
  children: T.node,
  className: T.string
}

export default NavbarOverlay
