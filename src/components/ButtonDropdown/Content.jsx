import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const ButtonDropdownContent = ({ node, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-btn-dropdown__content', className),
      ...rest
    },
    children
  )

ButtonDropdownContent.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default ButtonDropdownContent

