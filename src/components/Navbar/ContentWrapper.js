import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const NavbarContentWrapper = ({ node, children, className, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-navbar__content-wrapper', className),
      ...rest
    },
    children
  )

NavbarContentWrapper.propTypes = {
  handleToggle: T.func,
  node: T.string,
  children: T.node.isRequired,
  className: T.string
}

export default NavbarContentWrapper
