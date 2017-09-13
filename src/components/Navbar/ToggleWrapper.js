import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarToggleWrapper extends Component {
  handleClick = (e) => {
    this.props.onClick(e, this)
  }

  render() {
    const { tag, className, onClick, children, ...rest } = this.props
    const onClickProps = onClick
      ? {
        onClick: this.handleClick
      } : {
        onClick: this.context.handleToggle
      }
    return E(
      tag || 'button',
      {
        className: classNames('c-navbar__toggle', className),
        'aria-hidden': true,
        tabIndex: 0,
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

NavbarToggleWrapper.contextTypes = {
  handleToggle: T.func.isRequired
}

NavbarToggleWrapper.propTypes = {
  tag: T.string,
  onClick: T.func,
  children: T.node,
  className: T.string
}

export default NavbarToggleWrapper
