import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { BLOCK_TAGS } from '../../constants'

const NavbarItem = ({ tag, resetLineHeight, children, className, ...rest }) =>
  E(
    tag || 'li',
    {
      className: classNames(
        'c-navbar__item', className,
        { 'c-navbar__item--reset-line-height': resetLineHeight },
      ),
      ...rest
    },
    children
  )

NavbarItem.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  children: T.node.isRequired,
  resetLineHeight: T.bool,
  className: T.string
}

export default NavbarItem
