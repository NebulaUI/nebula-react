import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarLink extends Component {
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
        className: classNames('c-navbar__link', className),
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

NavbarLink.propTypes = {
  to: T.string.isRequired,
  node: T.string,
  className: T.string,
  callback: T.func,
  children: T.node.isRequired
}

export default NavbarLink
