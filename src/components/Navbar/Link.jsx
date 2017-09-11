import React, { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarLink extends Component {
  handleClick = (e) => {
    this.props.callback(e, this)
  }

  render() {
    const {
      to,
      component,
      tag,
      className,
      activeClassName = 'is-active',
      callback,
      children,
      ...rest
    } = this.props

    const onClickProps = callback
      ? {
        onClick: this.handleClick
      } : {}

    const ComponentOverride = component

    if (ComponentOverride) {
      return (
        <ComponentOverride
          to={to}
          className={classNames('c-navbar__link', className)}
          activeClassName={activeClassName}
          {...rest}
        >
          {children}
        </ComponentOverride>
      )
    }

    return E(
      tag || 'a',
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
  component: T.oneOfType([
    T.func,
    T.node
  ]),
  activeClassName: T.string,
  to: T.string.isRequired,
  tag: T.string,
  className: T.string,
  callback: T.func,
  children: T.node.isRequired
}

export default NavbarLink
