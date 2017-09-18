import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { BLOCK_TAGS } from '../../constants'

const NavbarContentWrapper = ({ tag, children, className, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames('c-navbar__content-wrapper', className),
      ...rest
    },
    children
  )

NavbarContentWrapper.propTypes = {
  handleToggle: T.func,
  tag: T.oneOf(BLOCK_TAGS),
  children: T.node.isRequired,
  className: T.string
}

export default NavbarContentWrapper
