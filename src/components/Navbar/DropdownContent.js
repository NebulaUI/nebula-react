import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const NavbarDropdownContent = ({ node, southWest, children, className, ...rest }) =>
  E(
    node || 'ul',
    {
      className: classNames(
        'c-navbar__dropdown',
        { 'c-navbar__dropdown--south-west': southWest },
        className
      ),
      ...rest
    },
    children
  )

NavbarDropdownContent.propTypes = {
  className: T.string,
  southWest: T.bool,
  node: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownContent
