import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const NavbarItem = ({ tag, resetLineHeight, children, className, ...rest }) =>
  E(
    tag || 'li',
    {
      className: classNames(
        `${NAMESPACE}c-navbar__item`, className,
        { [`${NAMESPACE}c-navbar__item--reset-line-height`]: resetLineHeight },
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
