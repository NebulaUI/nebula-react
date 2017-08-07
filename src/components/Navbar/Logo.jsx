import React, { Component } from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

class NavbarLogo extends Component {
  handleClick = (e) => {
    this.props.callback(e, this)
  }

  render() {
    const { to, className, callback, children } = this.props
    const onClickProps = callback
      ? {
        onClick: this.handleClick
      } : {}
    return (
      <a href={to} className={classNames('c-navbar__logo', className)} {...onClickProps}>
        {children}
      </a>
    )
  }
}

NavbarLogo.propTypes = {
  to: T.string.isRequired,
  callback: T.func,
  children: T.node.isRequired,
  className: T.string
}

export default NavbarLogo
