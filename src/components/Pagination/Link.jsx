import React, { createElement as E, Component } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

class PaginationLink extends Component {
  handleClick = (e) => {
    if (this.props.disabled) {
      return e.preventDefault()
    }

    return this.props.callback && this.props.callback(e, this)
  }

  render() {
    const {
      to,
      component,
      tag,
      className,
      isActive,
      activeClassName = 'is-active',
      callback,
      children,
      previous,
      disabled,
      next,
      ...rest
    } = this.props

    const ComponentOverride = component

    if (ComponentOverride) {
      return (
        <ComponentOverride
          to={to}
          className={classNames(`${NAMESPACE}c-pagination__link`, className)}
          activeClassName={activeClassName}
          previous={previous}
          next={next}
          disabled={disabled}
          onClick={this.handleClick}
          aria-label={this.props['aria-label']}
          {...rest}
        >
          {children}
        </ComponentOverride>
      )
    }

    return E(
      tag || 'a',
      {
        href: to,
        className: classNames(
          `${NAMESPACE}c-pagination__link`, className,
          previous ? `${NAMESPACE}c-pagination__link--previous` : '',
          next ? `${NAMESPACE}c-pagination__link--next` : '',
          { 'is-active': isActive }
        ),
        'aria-label': this.props['aria-label'],
        onClick: this.handleClick,
        disabled,
        ...rest
      },
      children
    )
  }
}

PaginationLink.propTypes = {
  component: T.oneOfType([
    T.func,
    T.node
  ]),
  isActive: T.bool,
  activeClassName: T.string,
  to: T.string.isRequired,
  tag: T.oneOf(ALL_TAGS),
  className: T.string,
  callback: T.func,
  children: T.node,
  disabled: T.bool,
  previous: T.bool,
  next: T.bool,
  'aria-label': T.string
}

export default PaginationLink
