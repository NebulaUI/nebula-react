import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

class NavbarDropdownContent extends Component {
  state = {
    isOpen: false
  }

  componentDidMount() {
    this.animateOpening()
  }

  animateOpening = () => {
    setTimeout(() => {
      this.setState({
        isOpen: true
      })
    }, 0)
  }

  render() {
    const { tag, southWest, children, className, ...rest } = this.props
    return E(
      tag || 'ul',
      {
        className: classNames(
          `${NAMESPACE}c-navbar__dropdown`,
          { [`${NAMESPACE}is-open`]: this.state.isOpen },
          { [`${NAMESPACE}c-navbar__dropdown--south-west`]: southWest },
          className
        ),
        ...rest
      },
      children
    )
  }
}

NavbarDropdownContent.propTypes = {
  className: T.string,
  southWest: T.bool,
  tag: T.oneOf(BLOCK_TAGS),
  children: T.node.isRequired
}

export default NavbarDropdownContent
