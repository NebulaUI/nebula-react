import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

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
  tag: T.string,
  children: T.node.isRequired,
  className: T.string
}

export default NavbarContentWrapper
