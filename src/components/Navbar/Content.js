import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const NavbarContent = ({ tag, right, keepAtTop, children, className, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        'c-navbar__content', className,
        { 'c-navbar__content--right': right },
        { 'c-navbar__content--keep-at-top': keepAtTop }
      ),
      ...rest
    },
    children
  )

NavbarContent.propTypes = {
  children: T.node.isRequired,
  tag: T.string,
  right: T.bool,
  keepAtTop: T.bool,
  className: T.string
}

export default NavbarContent
