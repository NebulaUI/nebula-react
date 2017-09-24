import React, { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

const initialClassName = `${NAMESPACE}c-pill`

class Pill extends Component {
  componentDidMount() {
    const { status, isActive } = this.props
    if (status && isActive) {
      // eslint-disable-next-line no-console
      console.warn('Cannot combine `status` and `isActive` props on <Pill />')
    }
  }

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
      activeClassName,
      ...rest
    } = this.props

    const buildClassName = () =>
      classNames(
        initialClassName,
        status ? `${initialClassName}--${status}` : '',
        { [`${initialClassName}--border`]: !status },
        className,
      )

    const onClickProps = onClick
    ? {
      onClick: this.handleClick
    } : {}

    const ComponentOverride = component

    if (ComponentOverride) {
      return (
        <ComponentOverride
          to={to}
          className={buildClassName()}
          activeClassName={!status && isActive ? activeClassName : null}
          {...rest}
        >
          { children }
        </ComponentOverride>
      )
    }

    return E(
      to ? 'a' : (tag || 'button'),
      {
        href: to,
        className: buildClassName(),
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

Pill.defaultProps = {
  activeClassName: 'is-active'
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
  activeClassName: T.string,
  className: T.string,
  children: T.node.isRequired
}

export { Pill }
