import React, { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Button = ({ node, component, to, fullWidth, theme, size, type, className, children, ...rest }) => {
  const ComponentOverride = component
  const enhancedClassName = classNames(
    'c-btn',
    className,
    { 'c-btn--alpha': theme === 'alpha' },
    { 'c-btn--beta': theme === 'beta' },
    { 'c-btn--sm': size === 'sm' },
    { 'c-btn--md': size === 'md' },
    { 'c-btn--lg': size === 'lg' },
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
    type === 'link' ? 'a' : (node || 'button'),
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
  node: T.string,
  type: T.oneOf(['submit', 'reset', 'menu', 'link']),
  to: T.string,
  fullWidth: T.bool,
  size: T.oneOf(['sm', 'md', 'lg']),
  theme: T.oneOf(['alpha', 'beta']),
  className: T.string,
  children: T.node.isRequired,
  component: T.oneOfType([
    T.func,
    T.node
  ])
}

export { Button }
