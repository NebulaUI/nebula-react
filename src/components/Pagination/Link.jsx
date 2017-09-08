import React, { createElement as E, Component } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class PaginationLink extends Component {
  handleClick = (e) => {
    this.props.callback(e, this)
  }

  render() {
    const {
      to,
      component,
      node,
      className,
      isActive,
      activeClassName = 'is-active',
      callback,
      children,
      togglePreviousNext,
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
          togglePreviousNext={togglePreviousNext}
          {...rest}
        >
          {children}
        </ComponentOverride>
      )
    }

    return E(
      node || 'a',
      {
        href: to,
        className: classNames(
        'c-pagination__link', togglePreviousNext ? `c-pagination__link--${togglePreviousNext}` : '', className,
        { 'is-active': isActive }),
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
  node: T.string,
  className: T.string,
  callback: T.func,
  children: T.node.isRequired,
  togglePreviousNext: T.oneOf(['previous', 'next'])
}

export default PaginationLink
