import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

class NavbarLogo extends Component {
  handleClick = (e) => {
    this.props.onClick(e, this)
  }

  render() {
    const { to, tag, width, className, onClick, children, ...rest } = this.props
    const onClickProps = onClick
      ? {
        onClick: this.handleClick
      } : {}
    return E(
      tag || 'a',
      {
        href: to,
        className: classNames(`${NAMESPACE}c-navbar__logo`, className),
        style: {
          width
        },
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

NavbarLogo.propTypes = {
  to: T.string.isRequired,
  tag: T.oneOf(ALL_TAGS),
  width: T.string,
  onClick: T.func,
  children: T.node.isRequired,
  className: T.string
}

export default NavbarLogo
