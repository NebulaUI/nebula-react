import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const NavbarItem = ({ node, resetLineHeight, children, className, ...rest }) =>
  E(
    node || 'li',
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
  children: T.node.isRequired,
  resetLineHeight: T.bool,
  className: T.string
}

export default NavbarItem
