import React, { cloneElement } from 'react'
import T from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
const FlyoutToggle = ({ children }, { handleToggle }) => {
  const enhancedChild = React.Children.map(children, child =>
    cloneElement(child, {
      onClick: handleToggle
    })
  )[0]
  return enhancedChild
}

FlyoutToggle.propTypes = {
  children: T.element.isRequired
}

FlyoutToggle.contextTypes = {
  handleToggle: T.func
}

export default FlyoutToggle
