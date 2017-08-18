import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const TabsPanel = ({ node, children, className, ...rest }) =>
  E(
    node || 'div',
    { className: classNames('c-tabs__panel', className), ...rest },
    children
  )

TabsPanel.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default TabsPanel
