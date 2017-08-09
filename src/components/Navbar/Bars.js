import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils'

const NavbarToggleBars = ({ node, children, className, ...rest }) =>
  E(
    node || 'span',
    {
      className: classNames('c-navbar__toggle-bars', className),
      ...rest
    },
    children
  )

NavbarToggleBars.propTypes = {
  children: T.node,
  node: T.string,
  className: T.string
}

export default NavbarToggleBars
