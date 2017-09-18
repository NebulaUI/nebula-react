import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { ALL_TAGS } from '../../constants'

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
  tag: T.oneOf(ALL_TAGS),
  className: T.string
}

export default NavbarToggleBars
