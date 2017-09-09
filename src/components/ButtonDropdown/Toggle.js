import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const ButtonDropdownToggle = ({
  node,
  className,
  children,
  ...rest
},
{
  handleButtonDropdownToggle
}) => (
  E(
    node || 'button',
    {
      className: classNames('c-btn-dropdown__toggle', className),
      onClick: handleButtonDropdownToggle,
      ...rest
    },
    children
  )
)

ButtonDropdownToggle.contextTypes = {
  handleButtonDropdownToggle: T.func.isRequired
}

ButtonDropdownToggle.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default ButtonDropdownToggle
