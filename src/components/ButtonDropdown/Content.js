import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const ButtonDropdownContent = ({
 node,
 className,
 children,
 ...rest
}, {
  buttonDropdownOpen
}) => (
  buttonDropdownOpen
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
  buttonDropdownOpen: T.bool.isRequired
}

ButtonDropdownContent.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default ButtonDropdownContent

