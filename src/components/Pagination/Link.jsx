import React, { createElement as E, Component } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { ALL_TAGS } from '../../constants'

class PaginationLink extends Component {
  handleClick = (e) => {
    this.props.callback(e, this)
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
      next,
      ariaLabel,
      ...rest
    } = this.props

    const onClickProps = callback
      ? {
        onClick: this.handleClick
      } : {}

    const ComponentOverride = component

    if (ComponentOverride) {
      return (
        <ComponentOverride
          to={to}
          className={classNames('c-pagination__link', className)}
          activeClassName={activeClassName}
          previous={previous}
          next={next}
          ariaLabel={ariaLabel}
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
        'c-pagination__link', className,
        previous ? 'c-pagination__link--previous' : '',
        next ? 'c-pagination__link--next' : '',
        { 'is-active': isActive }),
        'aria-label': ariaLabel,
        ...onClickProps,
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
  children: T.node.isRequired,
  previous: T.bool,
  next: T.bool,
  ariaLabel: T.string
}

export default PaginationLink
