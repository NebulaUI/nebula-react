import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarLogo extends Component {
  handleClick = (e) => {
    this.props.callback(e, this)
  }

  render() {
    const { to, node, className, callback, children, ...rest } = this.props
    const onClickProps = callback
      ? {
        onClick: this.handleClick
      } : {}
    return E(
      node || 'a',
      {
        href: to,
        className: classNames('c-navbar__logo', className),
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

NavbarLogo.propTypes = {
  to: T.string.isRequired,
  node: T.string,
  callback: T.func,
  children: T.node.isRequired,
  className: T.string
}

export default NavbarLogo
