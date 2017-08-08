import React, { Component } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarLink extends Component {
  handleClick = (e) => {
    this.props.callback(e, this)
  }

  render() {
    const { to, className, callback, children, ...rest } = this.props
    const onClickProps = callback
      ? {
        onClick: this.handleClick
      } : {}
    return (
      <a href={to} className={classNames('c-navbar__link', className)} {...onClickProps} {...rest}>
        {children}
      </a>
    )
  }
}

NavbarLink.propTypes = {
  to: T.string.isRequired,
  className: T.string,
  callback: T.func,
  children: T.node.isRequired
}

export default NavbarLink
