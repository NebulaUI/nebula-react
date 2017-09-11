import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils'

class TabsWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeLabel: '',
      activeId: props.defaultActiveId || null
    }
  }

  getChildContext = () => ({
    activateTab: this.activateTab,
    setActiveTabLabel: this.setActiveLabel,
    activeTabLabel: this.state.activeLabel,
    activeTabId: this.isControlled()
      ? this.props.activeId
      : this.state.activeId
  })

  setActiveLabel = activeLabel => this.setState({ activeLabel })

  activateTab = (activeId, initialMount) => {
    if (this.props.onTabChange && !initialMount) {
      this.props.onTabChange(activeId)
    }

    if (!this.isControlled()) {
      this.setState({ activeId })
    }
  }

  isControlled = () => !!this.props.activeId

  render() {
    const {
      props: {
        defaultActiveId, activeId, onTabChange, // eslint-disable-line no-unused-vars
        node, className, children, ...rest
      }
    } = this

    return E(
      node || 'div',
      { className: classNames('c-tabs', className), ...rest },
      children
    )
  }
}

TabsWrapper.childContextTypes = {
  activateTab: T.func.isRequired,
  activeTabId: T.oneOfType([T.string, T.number]),
  activeTabLabel: T.string.isRequired,
  setActiveTabLabel: T.func.isRequired
}

TabsWrapper.propTypes = {
  node: T.string,
  children: T.node.isRequired,
  className: T.string,
  onTabChange: T.func,
  activeId: T.oneOfType([T.string, T.number]),
  defaultActiveId: T.oneOfType([T.string, T.number])
}

export default TabsWrapper
