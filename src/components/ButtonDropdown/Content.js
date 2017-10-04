import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

const ButtonDropdownContent = ({
 tag,
 className,
 children,
  transition,
 ...rest
}, {
  buttonDropdownOpen
}) =>
  E(
    tag || 'div',
    {
      className: classNames(
        `${NAMESPACE}c-btn-dropdown__content`,
        { [`${NAMESPACE}c-btn-dropdown__content--transition`]: transition },
        className
      ),
      ...rest
    },
    buttonDropdownOpen && children
  )


ButtonDropdownContent.contextTypes = {
  buttonDropdownOpen: T.bool.isRequired
}

ButtonDropdownContent.propTypes = {
  tag: T.oneOf(ALL_TAGS),
  className: T.string,
  transition: T.bool,
  children: T.node.isRequired
}

export default ButtonDropdownContent

