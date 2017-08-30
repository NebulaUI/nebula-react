import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const initial = 'c-btn-dropdown__content'

const ButtonDropdownContent = ({ node, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(initial, className),
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

