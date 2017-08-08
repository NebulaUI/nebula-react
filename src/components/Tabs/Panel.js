import { createElement as E } from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const TabPanel = ({ node, children, className, ...rest }) =>
  E(
    node || 'div',
    { className: classNames('c-tabs__panel', className), ...rest },
    children
  )

TabPanel.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default TabPanel
