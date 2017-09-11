import React, { cloneElement } from 'react'
import T from 'prop-types'

const ButtonDropdownClose = ({ children }, { handleButtonDropdownToggle }) =>
  React.Children.map(children, child =>
    cloneElement(child, {
      onClick: handleButtonDropdownToggle
    })
  )[0]

ButtonDropdownClose.contextTypes = {
  handleButtonDropdownToggle: T.func.isRequired
}

ButtonDropdownClose.propTypes = {
  children: T.element.isRequired
}

export default ButtonDropdownClose
