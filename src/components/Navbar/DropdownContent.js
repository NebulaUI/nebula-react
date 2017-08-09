import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const NavbarDropdownContent = ({ node, children, className, ...rest }) =>
  E(
    node || 'ul',
    {
      className: classNames('c-navbar__dropdown', className),
      ...rest
    },
    children
  )

NavbarDropdownContent.propTypes = {
  className: T.string,
  node: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownContent
