import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const ButtonDropdownToggle = ({ node, handleToggle, className, children, ...rest }) => (
  E(
    node || 'button',
    {
      className: classNames('c-btn-dropdown__toggle', className),
      onClick: handleToggle,
      ...rest
    },
    children
  )
)

ButtonDropdownToggle.propTypes = {
  node: T.string,
  handleToggle: T.func,
  className: T.string,
  children: T.node.isRequired
}

export default ButtonDropdownToggle
