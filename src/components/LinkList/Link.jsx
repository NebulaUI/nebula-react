import React, { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

import { NAMESPACE, ALL_TAGS } from '../../constants'

class LinkListLink extends Component {

  handleClick = (e) => {
    this.props.onClick(e, this)
  }

  render() {
    const {
      tag,
      to,
      className,
      isActive,
      children,
      onClick,
      activeClassName,
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
            `${NAMESPACE}c-link-list__link`,
            className,
          )}
          activeClassName="is-active"
          {...rest}
        >
          { children }
        </ComponentOverride>
      )
    }

    const buildActiveClassName = () => (
      isActive
        ? activeClassName || 'is-active'
        : ''
    )

    return E(
      'a',
      {
        href: to,
        className: classNames(
          `${NAMESPACE}c-link-list__link`,
          buildActiveClassName(),
          className
        ),
        ...onClickProps,
        ...rest
      },
      children
    )
  }
}

LinkListLink.propTypes = {
  to: T.string.isRequired,
  tag: T.oneOf(ALL_TAGS),
  component: T.oneOfType([
    T.func,
    T.node
  ]),
  onClick: T.func,
  isActive: T.bool,
  className: T.string,
  activeClassName: T.string,
  children: T.node.isRequired
}

export default LinkListLink