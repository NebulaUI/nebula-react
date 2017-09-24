import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

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
    if (this.props.onChange && !initialMount) {
      this.props.onChange(activeId)
    }

    if (!this.isControlled()) {
      this.setState({ activeId })
    }
  }

  isControlled = () => !!this.props.activeId

  render() {
    const {
      props: {
        defaultActiveId, activeId, onChange, // eslint-disable-line no-unused-vars
        tag, className, children, ...rest
      }
    } = this

    return E(
      tag || 'div',
      { className: classNames(`${NAMESPACE}c-tabs`, className), ...rest },
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
  tag: T.oneOf(BLOCK_TAGS),
  children: T.node.isRequired,
  className: T.string,
  onChange: T.func,
  activeId: T.oneOfType([T.string, T.number]),
  defaultActiveId: T.oneOfType([T.string, T.number])
}

export default TabsWrapper
