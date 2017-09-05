import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const TabsPanel = ({ node, children, className, id, ...rest }, { activeId, activeLabel }) => {
  if (id !== activeId) {
    return null
  }

  return E(
    node || 'div',
    {
      className: classNames('c-tabs__panel', className),
      role: 'tabpanel',
      'aria-labelledby': activeLabel,
      ...rest
    },
    children
  )
}

TabsPanel.contextTypes = {
  activeId: T.oneOfType([T.string, T.number]),
  activeLabel: T.string.isRequired
}

TabsPanel.propTypes = {
  node: T.string,
  id: T.oneOfType([T.string, T.number]).isRequired,
  className: T.string,
  children: T.node
}

export default TabsPanel
