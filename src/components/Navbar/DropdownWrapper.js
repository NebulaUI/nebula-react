import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'

const NavbarDropdownWrapper = ({ tag, children, className, ...rest }) =>
  E(
    tag || 'li',
    {
      className: classNames('c-navbar__item', className),
      ...rest
    },
    children
  )

NavbarDropdownWrapper.propTypes = {
  className: T.string,
  tag: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownWrapper
