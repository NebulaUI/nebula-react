import React, { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const initial = 'c-pill'

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
      ...rest
    } = this.props

    const buildClassName = () =>
      classNames(initial, className,
        status ? `${initial}--${status}` : '',
        { [`${initial}--border`]: !status },
        { 'is-active': !status && isActive })

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
          {...rest}
        >
          {children}
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

Pill.propTypes = {
  to: T.string,
  tag: T.string,
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
