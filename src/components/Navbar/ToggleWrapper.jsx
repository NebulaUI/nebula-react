import React, { Component } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarToggleWrapper extends Component {
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
      <button className={classNames('c-navbar__toggle', className)} {...onClickProps} {...rest}>
        {children}
      </button>
    )
  }
}

NavbarToggleWrapper.propTypes = {
  handleToggle: T.func,
  callback: T.func,
  children: T.node,
  className: T.string
}

export default NavbarToggleWrapper
