import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarOverlay extends Component {
  handleClick = (e) => {
    this.props.onClick(e, this)
  }

  render() {
    const { tag, className, onClick, children, ...rest } = this.props
    const onClickProps = onClick
      ? {
        onClick: this.handleClick
      } : {
        onClick: this.context.close
      }

    return E(
      tag || 'button',
      {
        className: classNames('c-navbar__overlay', className),
        'aria-hidden': true,
        tabIndex: 0,
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

NavbarOverlay.contextTypes = {
  close: T.func.isRequired
}

NavbarOverlay.propTypes = {
  tag: T.string,
  onClick: T.func,
  children: T.node,
  className: T.string
}

export default NavbarOverlay
