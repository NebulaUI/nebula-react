import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils'

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
    const { node, children, target, activateTab, isActive, className, ...rest } = this.props
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
      node || 'button',
      {
        onClick: handleClick,
        ref: (n) => { this.node = n },
        tabIndex: isActive ? 0 : -1,
        role: 'tab',
        'aria-selected': isActive,
        'aria-controls': target,
        onKeyDown: handleKeyDown,
        className: classNames(
          'c-tabs__tab', className,
          { 'is-active': isActive }
        ),
        ...rest
      },
      children
    )
  }
}

TabsTab.contextTypes = {
  setActiveTabLabel: T.func.isRequired
}

TabsTab.propTypes = {
  node: T.string,
  children: T.node.isRequired,
  isActive: T.bool,
  className: T.string,
  activateTab: T.func,
  target: T.oneOfType([T.string, T.number]).isRequired
}

export default TabsTab
