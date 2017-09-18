import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

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
        className: classNames(`${NAMESPACE}c-btn-dropdown__content`, className),
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
  tag: T.oneOf(ALL_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default ButtonDropdownContent

