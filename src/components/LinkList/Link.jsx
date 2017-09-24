import React, { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE } from '../../constants'

class LinkListLink extends Component {

  handleClick = (e) => {
    this.props.onClick(e, this)
  }

  render() {
    const {
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

    const buildActiveClassName = () => (
      isActive
        ? activeClassName
        : ''
    )

    if (ComponentOverride) {
      return (
        <ComponentOverride
          to={to}
          className={classNames(
            `${NAMESPACE}c-link-list__link`,
            className,
          )}
          activeClassName={buildActiveClassName()}
          {...rest}
        >
          { children }
        </ComponentOverride>
      )
    }

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

LinkListLink.defaultProps = {
  activeClassName: 'is-active'
}

LinkListLink.propTypes = {
  to: T.string.isRequired,
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
