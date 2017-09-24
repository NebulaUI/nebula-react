import React, { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BUTTON_SIZES, BUTTON_THEMES, ALL_TAGS } from '../../constants'

class Button extends Component {
  render() {
    const {
      tag,
      component,
      to,
      fullWidth,
      theme,
      size,
      type,
      className,
      children,
      ...rest
    } = this.props

    const ComponentOverride = component
    const enhancedClassName = classNames(
      `${NAMESPACE}c-btn`,
      className,
      theme ? `${NAMESPACE}c-btn--${theme}` : '',
      size ? `${NAMESPACE}c-btn--${size}` : '',
      { [`${NAMESPACE}c-btn--full`]: fullWidth }
    )

    const handleClick = (e) => {
      if (e.detail !== 0) {
        this.button.blur()
      }
    }

    if (ComponentOverride) {
      return (
        <ComponentOverride
          to={to}
          onClick={handleClick}
          className={enhancedClassName}
          {...rest}
        >
          {children}
        </ComponentOverride>
      )
    }

    return E(
      to ? 'a' : (tag || 'button'),
      {
        onClick: handleClick,
        type,
        href: to,
        className: enhancedClassName,
        ref: (n) => { this.button = n },
        ...rest
      },
      children
    )
  }
}

Button.propTypes = {
  tag: T.oneOf(ALL_TAGS),
  type: T.oneOf(['submit', 'reset', 'menu']),
  to: T.string,
  fullWidth: T.bool,
  size: T.oneOf(BUTTON_SIZES),
  theme: T.oneOf(BUTTON_THEMES),
  className: T.string,
  children: T.node.isRequired,
  component: T.oneOfType([
    T.func,
    T.node
  ])
}

export { Button }
