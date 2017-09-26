import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const NavbarContentWrapper = ({ tag, children, className, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-navbar__content-wrapper`, className),
      ...rest
    },
    children
  )

NavbarContentWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  children: T.node.isRequired,
  className: T.string
}

export default NavbarContentWrapper
