import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const initial = 'c-btn-dropdown__toggle'

const ButtonDropdownToggle = ({ node, handleToggle, className, children, ...rest }) => (
  E(
    node || 'button',
    {
      className: classNames(initial, className),
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
  children: T.node
}

export default ButtonDropdownToggle
