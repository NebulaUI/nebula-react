import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

const NavbarDropdownWrapper = ({ node, children, className, ...rest }) =>
  E(
    node || 'li',
    {
      className: classNames('c-navbar__item', className),
      ...rest
    },
    children
  )

NavbarDropdownWrapper.propTypes = {
  className: T.string,
  node: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownWrapper
