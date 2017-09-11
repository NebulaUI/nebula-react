import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const TabsPanel = ({ node, children, className, id, ...rest }, { activeTabId, activeTabLabel }) => {
  if (id !== activeTabId) {
    return null
  }

  return E(
    node || 'div',
    {
      className: classNames('c-tabs__panel', className),
      role: 'tabpanel',
      'aria-labelledby': activeTabLabel,
      ...rest
    },
    children
  )
}

TabsPanel.contextTypes = {
  activeTabId: T.oneOfType([T.string, T.number]),
  activeTabLabel: T.string.isRequired
}

TabsPanel.propTypes = {
  node: T.string,
  id: T.oneOfType([T.string, T.number]).isRequired,
  className: T.string,
  children: T.node
}

export default TabsPanel
