import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const ButtonDropdownContent = ({
 tag,
 className,
 children,
 ...rest
}, {
  buttonDropdownOpen
}) => (
  buttonDropdownOpen
    ? E(
        tag || 'div',
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
  tag: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default ButtonDropdownContent

