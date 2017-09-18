import React, { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { BUTTON_SIZES, BUTTON_THEMES, ALL_TAGS } from '../../constants'

const Button = ({
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
}) => {
  const ComponentOverride = component
  const enhancedClassName = classNames(
    'c-btn',
    className,
    theme ? `c-btn--${theme}` : '',
    size ? `c-btn--${size}` : '',
    { 'c-btn--full': fullWidth }
  )

  if (ComponentOverride) {
    return (
      <ComponentOverride
        to={to}
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
      type,
      href: to,
      className: enhancedClassName,
      ...rest
    },
    children
  )
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
