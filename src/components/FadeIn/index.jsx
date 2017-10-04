import React, { Component } from 'react'
import T from 'prop-types'

import { NAMESPACE } from '../../constants'
import { classNames } from '../../utils'

class FadeIn extends Component {
  state = {
    hasMounted: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hasMounted: true })
    }, 0)
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children, ...rest } = this.props
    return React.cloneElement(this.props.children, {
      className: classNames(
        `${NAMESPACE}c-fade-in`,
        { [`${NAMESPACE}c-fade-in--has-mounted`]: this.state.hasMounted },
        children.props.className || '',
      ),
      ...rest
    })
  }
}

FadeIn.propTypes = {
  children: T.node.isRequired
}

export { FadeIn }
