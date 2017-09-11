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
  handleButtonDropdownToggle,
  buttonDropdownDisabled
}) => (
  E(
    node || 'button',
    {
      className: classNames('c-btn-dropdown__toggle', className),
      onClick: handleButtonDropdownToggle,
      disabled: buttonDropdownDisabled,
      ...rest
    },
    children
  )
)

ButtonDropdownToggle.contextTypes = {
  handleButtonDropdownToggle: T.func.isRequired,
  buttonDropdownDisabled: T.bool
}

ButtonDropdownToggle.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default ButtonDropdownToggle
