import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'


const NavbarInner = ({ tag, children, className, ...rest }) =>
  E(
    tag || 'nav',
    {
      className: classNames('c-navbar__wrap', className),
      ...rest
    },
    children
  )

NavbarInner.propTypes = {
  tag: T.string,
  children: T.node.isRequired,
  className: T.string
}

export default NavbarInner
