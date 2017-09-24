import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { NAMESPACE, ALL_TAGS } from '../../constants'

class TabsTab extends Component {
  componentDidMount() {
    if (this.props.isActive) {
      this.setActiveLabel()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive !== this.props.isActive) {
      if (this.props.isActive) {
        this.node.focus()
        this.setActiveLabel()
      }
    }
  }

  setActiveLabel() {
    this.context.setActiveTabLabel(this.props.children)
  }

  render() {
    const {
      tag,
      children,
      target,
      activateTab,
      isActive,
      activeClassName,
      className,
      ...rest
    } = this.props
    const handleKeyDown = (e) => {
      if (e.keyCode === 37 || e.keyCode === 38) {
        e.preventDefault()
        activateTab('prev')
      }

      if (e.keyCode === 39 || e.keyCode === 40) {
        e.preventDefault()
        activateTab('next')
      }
    }

    const handleClick = () => {
      if (!isActive) {
        activateTab()
      }
    }

    return E(
      tag || 'button',
      {
        onClick: handleClick,
        ref: (n) => { this.node = n },
        tabIndex: isActive ? 0 : -1,
        role: 'tab',
        'aria-selected': isActive,
        'aria-controls': target,
        onKeyDown: handleKeyDown,
        className: classNames(
          `${NAMESPACE}c-tabs__tab`, className,
          isActive ? activeClassName : ''
        ),
        ...rest
      },
      children
    )
  }
}

TabsTab.defaultProps = {
  activeClassName: 'is-active'
}

TabsTab.contextTypes = {
  setActiveTabLabel: T.func.isRequired
}

TabsTab.propTypes = {
  tag: T.oneOf(ALL_TAGS),
  children: T.node.isRequired,
  isActive: T.bool,
  className: T.string,
  activeClassName: T.string,
  activateTab: T.func,
  target: T.oneOfType([T.string, T.number]).isRequired
}

export default TabsTab
