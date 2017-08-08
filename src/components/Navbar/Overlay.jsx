import React, { Component } from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

class NavbarOverlay extends Component {
  handleClick = (e) => {
    this.props.callback(e, this)
  }

  render() {
    const { handleToggle, className, callback, children, ...rest } = this.props
    const onClickProps = callback
      ? {
        onClick: this.handleClick
      } : {
        onClick: handleToggle
      }
    return (
      <button className={classNames('c-navbar__overlay', className)} {...onClickProps} {...rest}>
        {children}
      </button>
    )
  }
}

NavbarOverlay.propTypes = {
  handleToggle: T.func,
  callback: T.func,
  children: T.node,
  className: T.string
}

export default NavbarOverlay
