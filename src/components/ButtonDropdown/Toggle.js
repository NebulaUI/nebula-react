import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

class ButtonDropdownToggle extends Component {
  render() {
    const {
      tag,
      className,
      children,
      ...rest
    } = this.props
    const {
      handleButtonDropdownToggle,
      buttonDropdownDisabled
    } = this.context

    const handleClick = (e) => {
      if (e.detail !== 0) {
        this.button.blur()
      }

      handleButtonDropdownToggle(e)
    }

    return E(
      tag || 'button',
      {
        className: classNames(`${NAMESPACE}c-btn-dropdown__toggle`, className),
        onClick: handleClick,
        disabled: buttonDropdownDisabled,
        ref: (n) => { this.button = n },
        ...rest
      },
      children
    )
  }
}

ButtonDropdownToggle.contextTypes = {
  handleButtonDropdownToggle: T.func.isRequired,
  buttonDropdownDisabled: T.bool
}

ButtonDropdownToggle.propTypes = {
  tag: T.oneOf(ALL_TAGS),
  className: T.string,
  children: T.node
}

export default ButtonDropdownToggle
