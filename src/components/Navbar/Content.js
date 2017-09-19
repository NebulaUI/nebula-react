import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const NavbarContent = ({ tag, right, keepAtTop, children, className, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        `${NAMESPACE}c-navbar__content`, className,
        { [`${NAMESPACE}c-navbar__content--right`]: right },
        { [`${NAMESPACE}c-navbar__content--keep-at-top`]: keepAtTop }
      ),
      ...rest
    },
    children
  )

NavbarContent.propTypes = {
  children: T.node.isRequired,
  tag: T.oneOf(BLOCK_TAGS),
  right: T.bool,
  keepAtTop: T.bool,
  className: T.string
}

export default NavbarContent
