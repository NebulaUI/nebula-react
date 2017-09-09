import React, { cloneElement } from 'react'
import T from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
const FlyoutToggle = ({ children }, { handleFlyoutToggle }) =>
  React.Children.map(children, child =>
    cloneElement(child, {
      onClick: handleFlyoutToggle
    })
  )[0]

FlyoutToggle.propTypes = {
  children: T.element.isRequired
}

FlyoutToggle.contextTypes = {
  handleFlyoutToggle: T.func
}

export default FlyoutToggle
