import React, { cloneElement } from 'react'
import T from 'prop-types'

class ClickOutside extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.handleWindowClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleWindowClick)
  }

  handleWindowClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.props.onClickOutside(e)
    }
  }

  render() {
    const { children } = this.props
    const enhancedChild = React.Children.map(children, child =>
      cloneElement(child, {
        ref: (n) => { this.node = n }
      })
    )[0]

    return enhancedChild
  }
}

ClickOutside.propTypes = {
  children: T.element.isRequired,
  onClickOutside: T.func.isRequired
}

export { ClickOutside }
