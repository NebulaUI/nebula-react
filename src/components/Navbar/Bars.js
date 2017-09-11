import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils'

const NavbarToggleBars = ({ tag, children, className, ...rest }) =>
  E(
    tag || 'span',
    {
      className: classNames('c-navbar__toggle-bars', className),
      ...rest
    },
    children
  )

NavbarToggleBars.propTypes = {
  children: T.node,
  tag: T.string,
  className: T.string
}

export default NavbarToggleBars
