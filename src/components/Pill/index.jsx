import React, { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

const initialClassName = `${NAMESPACE}c-pill`

class Pill extends Component {
  handleClick = (e) => {
    this.props.onClick(e, this)
  }

  render() {
    const {
      tag,
      to,
      className,
      status,
      isActive,
      children,
      onClick,
      component,
      ...rest
    } = this.props

    const onClickProps = onClick
    ? {
      onClick: this.handleClick
    } : {}

    const ComponentOverride = component

    if (ComponentOverride) {
      return (
        <ComponentOverride
          to={to}
          className={classNames(
            initialClassName,
            status ? `${initialClassName}--${status}` : '',
            className
          )}
          {...rest}
        >
          { children }
        </ComponentOverride>
      )
    }

    return E(
      to ? 'a' : (tag || 'div'),
      {
        href: to,
        className: classNames(
          initialClassName,
          status ? `${initialClassName}--${status}` : '',
          { 'is-active': isActive },
          className
        ),
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

Pill.propTypes = {
  to: T.string,
  tag: T.oneOf(ALL_TAGS),
  status: T.oneOf([
    'success',
    'info',
    'warning',
    'error'
  ]),
  component: T.oneOfType([
    T.func,
    T.node
  ]),
  onClick: T.func,
  isActive: T.bool,
  className: T.string,
  children: T.node.isRequired
}

export { Pill }
