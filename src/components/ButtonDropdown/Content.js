import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const ButtonDropdownContent = ({
 node,
 className,
 children,
 ...rest
}, {
  isButtonDropdownOpen
}) => (
  isButtonDropdownOpen
    ? E(
        node || 'div',
      {
        className: classNames('c-btn-dropdown__content', className),
        ...rest
      },
      children
    )
    : null
)

ButtonDropdownContent.contextTypes = {
  isButtonDropdownOpen: T.bool.isRequired
}

ButtonDropdownContent.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default ButtonDropdownContent

