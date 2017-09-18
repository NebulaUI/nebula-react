import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { BLOCK_TAGS } from '../../constants'

const NavbarInner = ({ tag, children, className, ...rest }) =>
  E(
    tag || 'nav',
    {
      className: classNames('c-navbar__wrap', className),
      role: 'navigation',
      ...rest
    },
    children
  )

NavbarInner.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  children: T.node.isRequired,
  className: T.string
}

export default NavbarInner
