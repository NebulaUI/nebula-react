import React, { cloneElement } from 'react'
import T from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
const FlyoutToggle = ({ children, ...rest }, { handleToggle }) => {
  const enhancedChildren = React.Children.map(children, child =>
    cloneElement(child, {
      onClick: handleToggle
    })
  )[0]
  return enhancedChildren
}

FlyoutToggle.propTypes = {
  children: T.element.isRequired
}

FlyoutToggle.contextTypes = {
  handleToggle: T.func
}

export default FlyoutToggle
